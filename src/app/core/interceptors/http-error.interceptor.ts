import {
	HttpEvent,
	HttpHandler,
	HttpInterceptor,
	HttpRequest,
	HttpStatusCode,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';

@Injectable()
export class HttpErrorInterceptor implements HttpInterceptor {
	intercept(
		req: HttpRequest<any>,
		next: HttpHandler
	): Observable<HttpEvent<any>> {
		return next.handle(req).pipe(
			catchError((error) => {
				if (!(error instanceof ErrorEvent)) {
					if (error.status === HttpStatusCode.InternalServerError) {
						alert('Fallo el Servicio de AutenticaDiego');
					}
				}
				return throwError(() => error);
			})
		);
	}
}
