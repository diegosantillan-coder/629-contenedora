import { TestBed, fakeAsync } from '@angular/core/testing';

import { HttpClient, HttpClientModule } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { UsuarioSeusMock } from '@auth/application/mocks/usuario-seus.mock';
import { of, throwError } from 'rxjs';
import { SessionService } from './session.service';

describe('SessionService', () => {
	let service: SessionService;
	let http: HttpClient;

	beforeEach(() => {
		TestBed.configureTestingModule({
			imports: [HttpClientModule, HttpClientTestingModule],
		});
		service = TestBed.inject(SessionService);
		http = TestBed.inject(HttpClient);
	});

	it('debería crearse', () => {
		expect(service).toBeTruthy();
	});

	it('debería obtener el usuario no está logueado por defecto', () => {
		expect(service.isLogged()).toBeFalse;
	});

	it('debería obtener el usuario no está logueado', () => {
		const usuario = UsuarioSeusMock;
		usuario.isAuthenticated = false;
		service.setUserInfo(usuario);
		expect(service.isLogged()).toBeFalse;
	});

	it('debería obtener el usuario está logueado', () => {
		const usuario = UsuarioSeusMock;
		usuario.isAuthenticated = true;
		service.setUserInfo(usuario);
		expect(service.isLogged()).toBeTrue;
	});

	it('debería obtener información del usuario', fakeAsync(() => {
		const httpSpy = spyOn(http, 'get').and.returnValue(of(UsuarioSeusMock));
		service.getUserInfo().subscribe((resultado) => {
			expect(resultado).toEqual(UsuarioSeusMock);
		});
		expect(httpSpy).toHaveBeenCalled();
		expect(httpSpy.calls.mostRecent().args[0]).toEqual('/gateway/user/current');
	}));

	it('debería arrojar un error si no se comprueba la sesión de usuario', fakeAsync(() => {
		const httpSpy = spyOn(http, 'get').and.returnValue(
			throwError(() => new Error())
		);
		spyOn((service as any)['sessionState'], 'error');
		(service as any).findUserInfo();
		expect(httpSpy).toHaveBeenCalled();
		expect((service as any)['sessionState'].error).toHaveBeenCalled();
	}));
});
