import { loadRemoteModule } from '@angular-architects/module-federation';
import { Route } from '@angular/router';
import { seusGuard } from '@auth/application/guards/seus.guard';
import { PortalComponent } from '@core/components/portal/portal.component';
import { PORTAL_MENU } from '@core/routes/portal/portal.name.route';
import { PrehomeComponent } from '../../../modules/prehome/prehome.component';

export const PORTAL_ROUTES: Route = {
	path: PORTAL_MENU.path,
	data: {
		menu: PORTAL_MENU,
	},
	component: PortalComponent,
	canActivate: [seusGuard],
	children: [
		{
			path: 'home',
			loadComponent: async () =>
				loadRemoteModule({
					type: 'module',
					remoteEntry: 'http://localhost:4201/remoteEntry.js',
					exposedModule: './HomeComponent',
				}).then((m) => m.HomeComponent),
		},
		{
			path: '',
			component: PrehomeComponent,
		},
	],
};
