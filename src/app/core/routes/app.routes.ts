import { loadRemoteModule } from '@angular-architects/module-federation';
import { Routes } from '@angular/router';
import { AccessDeniedComponent } from '@shared/components/access-denied/access-denied.component';
import { Rutas } from '@shared/enums/routes.enum';
import { PORTAL_MENU } from './portal/portal.name.route';
import { PORTAL_ROUTES } from './portal/portal.routes';

export const APP_ROUTES: Routes = [
	PORTAL_ROUTES,
	{
		path: '',
		pathMatch: 'full',
		redirectTo: PORTAL_MENU.path,
	},
	{
		path: Rutas.ACCESS_DENIED,
		title: 'Sin Acceso',
		pathMatch: 'full',
		component: AccessDeniedComponent,
	},
	{
		path: '**',
		title: 'Página no encontrada',
		pathMatch: 'full',
		redirectTo: `${PORTAL_MENU.path}/${Rutas.NOT_FOUND}`,
	},
	{
		path: 'home',
		loadComponent: async () =>
			loadRemoteModule({
				type: 'module',
				remoteEntry: 'http://localhost:4201/remoteEntry.js',
				exposedModule: './HomeComponent',
			}).then((m) => m.HomeComponent),
	},
];
