import { inject } from '@angular/core';
import { SessionService } from '@auth/application/services/session.service';
import { UsuarioSeus } from '@auth/domain/models/usuario-seus.model';
import { RouterService } from '@shared/services/router/router.service';
import { catchError, map, Observable, of } from 'rxjs';

export const seusGuard = (): Observable<boolean> => {
	const routerService = inject(RouterService);
	const sessionService = inject(SessionService);

	const handleAccessAllowed = (): boolean => {
		return true;
	};

	const handleAccessDenied = (): boolean => {
		routerService.accessDenied();
		return false;
	};

	return sessionService.getUserInfo().pipe(
		map((user: UsuarioSeus) => {
			if (user.isAuthenticated) {
				return handleAccessAllowed();
			} else {
				return handleAccessDenied();
			}
		}),
		catchError(() => of(handleAccessDenied()))
	);
};
