import { provideHttpClient } from '@angular/common/http';
import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter, withHashLocation } from '@angular/router';
import { HttpModule } from '@core/modules/http.module';
import { ROUTES } from './app.routes';

export const appConfig: ApplicationConfig = {
	providers: [
		provideRouter(ROUTES, withHashLocation()),
		provideHttpClient(),
		importProvidersFrom(HttpModule),
	],
};
