import { Location } from '@angular/common';
import {
	HttpEvent,
	HttpHandler,
	HttpInterceptor,
	HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoaderService } from '@core/services/loader.service';
import { LIST_COOKIE_XSRF_TOKEN } from '@shared/config/cookie.config';
import { CONFIG_ENVIRONMENT } from '@shared/config/environment.config';
import { CookieService } from 'ngx-cookie-service';
import { Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';

@Injectable()
export class BaseInterceptor implements HttpInterceptor {
	private readonly ambiente = CONFIG_ENVIRONMENT;

	constructor(
		private location: Location,
		private cookieService: CookieService,
		private loaderService: LoaderService
	) {}

	intercept(
		req: HttpRequest<any>,
		next: HttpHandler
	): Observable<HttpEvent<any>> {
		this.loaderService.initLoader();

		req = req.clone({
			headers: req.headers
				.set('X-XSRF-TOKEN', this.getXSRFToken())
				.set('X-Frame-Option', 'DENY')
				.set('X-Content-Type-Options', 'nosniff')
				.set('X-XSS-Protection', '1; mode=block')
				.set('X-APP-RELAYSTATE', `#${this.location.path()}`)
				.set('Cache-Control', 'no-cache; must-revalidate; no-store'),
			withCredentials: true,
		});

		if (!req.url.match(/^http(s)?:\/\/(.*)$/)) {
			const url = `${CONFIG_ENVIRONMENT.services.apiUrl}${req.url}`.replace(
				/([^:]\/)\/+/g,
				'$1'
			);
			console.log(url);
			req = req.clone({ url });
		}

		return next.handle(req).pipe(
			finalize(() => {
				console.log('Base Interceptor');
				this.loaderService.stopLoader();
			})
		);
	}

	private getXSRFToken(): string {
		return this.cookieService.get(
			LIST_COOKIE_XSRF_TOKEN[this.ambiente.environment]['usuario_externo']
		);
	}
}
