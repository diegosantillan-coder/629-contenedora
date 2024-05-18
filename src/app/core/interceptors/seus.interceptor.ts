import {
	HttpEvent,
	HttpHandler,
	HttpInterceptor,
	HttpRequest,
	HttpStatusCode,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RouterService } from '@shared/services/router/router.service';
import { Observable, catchError, throwError } from 'rxjs';

@Injectable()
export class Seus4Interceptor implements HttpInterceptor {
	constructor(private routerService: RouterService) {}

	intercept(
		req: HttpRequest<any>,
		next: HttpHandler
	): Observable<HttpEvent<any>> {
		return next.handle(req).pipe(
			catchError((error) => {
				switch (error.status) {
					case HttpStatusCode.Unauthorized: {
						document.write(error.error);
						break;
					}
					case HttpStatusCode.Forbidden: {
						this.routerService.accessDenied();
						return throwError(() => error);
					}
				}
				return throwError(() => error);
			})
		);
	}
}
