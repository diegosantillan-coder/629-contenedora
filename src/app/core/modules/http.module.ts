import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BaseInterceptor } from '@core/interceptors/base.interceptor';
import { HttpErrorInterceptor } from '@core/interceptors/http-error.interceptor';
import { Seus4Interceptor } from '@core/interceptors/seus.interceptor';

@NgModule({
	declarations: [],
	imports: [HttpClientModule, RouterModule],
	exports: [HttpClientModule],
	providers: [
		{ provide: HTTP_INTERCEPTORS, useClass: BaseInterceptor, multi: true },
		{ provide: HTTP_INTERCEPTORS, useClass: HttpErrorInterceptor, multi: true },
		{ provide: HTTP_INTERCEPTORS, useClass: Seus4Interceptor, multi: true },
	],
	bootstrap: [],
})
export class HttpModule {}
