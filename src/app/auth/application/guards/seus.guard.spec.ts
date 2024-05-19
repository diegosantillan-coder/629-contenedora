import { HttpClientModule } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed, fakeAsync } from '@angular/core/testing';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { UsuarioSeusMock } from '@auth/application/mocks/usuario-seus.mock';
import { SessionService } from '@auth/application/services/session.service';
import { Rutas } from '@shared/enums/routes.enum';
import { RouterService } from '@shared/services/router/router.service';
import { Observable, throwError } from 'rxjs';
import { seusGuard } from './seus.guard';

describe('seusGuard', () => {
	let guard: Observable<boolean>;
	let sessionService: SessionService;
	let router: Router;
	let routerService: RouterService;

	beforeEach(() => {
		TestBed.configureTestingModule({
			imports: [
				RouterTestingModule.withRoutes([
					{ path: 'sin-acceso', redirectTo: '' },
				]),
				HttpClientModule,
				HttpClientTestingModule,
			],
		});
		guard = TestBed.runInInjectionContext(seusGuard);
		sessionService = TestBed.inject(SessionService);
		router = TestBed.inject(Router);
		routerService = TestBed.inject(RouterService);
	});

	it('debería crearse', () => {
		expect(guard).toBeTruthy();
	});

	it('debería permitir acceso cuando el usuario está autenticado', fakeAsync(() => {
		const usuario = UsuarioSeusMock;
		usuario.isAuthenticated = true;
		sessionService.setUserInfo(usuario);
		guard.subscribe((resultado) => {
			expect(resultado).toBeTrue();
		});
	}));

	it('debería bloquear acceso al usuario cuando no está autenticado', fakeAsync(() => {
		const routerSpy = spyOn(router, 'navigate');
		const usuario = UsuarioSeusMock;
		usuario.isAuthenticated = false;
		sessionService.setUserInfo(usuario);
		guard.subscribe((resultado) => {
			expect(resultado).toBeFalse();
			expect(routerSpy).toHaveBeenCalledWith([Rutas.ACCESS_DENIED], {
				skipLocationChange: true,
			});
			expect(routerSpy).toHaveBeenCalled();
		});
	}));

	it('debería bloquear acceso si no se obtiene la información del usuario', fakeAsync(() => {
		spyOn(sessionService, 'getUserInfo').and.returnValue(
			throwError(() => new Error())
		);
		spyOn(routerService, 'accessDenied');
		guard.subscribe((resultado) => {
			expect(resultado).toBeFalse();
			expect(routerService.accessDenied).toHaveBeenCalled();
		});
	}));
});
