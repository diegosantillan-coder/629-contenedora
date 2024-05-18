import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UsuarioSeus } from '@auth/domain/models/usuario-seus.model';
import { Observable, ReplaySubject, throwError } from 'rxjs';

@Injectable({
	providedIn: 'root',
})
export class SessionService {
	constructor(private readonly http: HttpClient) {}

	private usuarioSeus: UsuarioSeus | undefined;
	private sessionState = new ReplaySubject<UsuarioSeus>(1);

	isLogged(): boolean {
		return this.usuarioSeus?.isAuthenticated || false;
	}

	setUserInfo(usuarioSeus: UsuarioSeus): void {
		if (usuarioSeus) {
			this.usuarioSeus = usuarioSeus;
			this.sessionState.next(this.usuarioSeus);
		}
	}

	getUserInfo(): Observable<UsuarioSeus> {
		if (!this.isLogged()) {
			this.findUserInfo();
		}
		return this.sessionState.asObservable();
	}

	private findUserInfo(): void {
		this.http
			.get<UsuarioSeus>('/gateway/user/current', {
				headers: this.getHeaders(),
			})
			.subscribe({
				next: (user) => this.setUserInfo(user),
				error: () =>
					this.sessionState.error(
						throwError(
							() => new Error('No se pudo comprobar la sesión del usuario')
						)
					),
			});
	}

	private getHeaders(): HttpHeaders {
		return new HttpHeaders({
			'X-APP-SERVICE-PROVIDER': 'Sucursal Virtual Personas - LAB',
		});
	}
}
