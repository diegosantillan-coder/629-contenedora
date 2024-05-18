import { Route } from '@angular/router';
import { seusGuard } from '@auth/application/guards/seus.guard';
import { PortalComponent } from '@core/portal/portal/portal.component';
import { PORTAL_MENU } from '@core/routes/portal/portal.name.route';

export const PORTAL_ROUTES: Route = {
	path: PORTAL_MENU.path,
	data: {
		menu: PORTAL_MENU,
	},
	component: PortalComponent,
	canActivate: [seusGuard],
};
