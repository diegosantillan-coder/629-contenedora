import { Route } from '@angular/router';
import { PortalComponent } from '@core/components/portal/portal.component';
import { PORTAL_MENU } from '@core/routes/portal/portal.name.route';

export const PORTAL_ROUTES: Route = {
	path: PORTAL_MENU.path,
	data: {
		menu: PORTAL_MENU,
	},
	component: PortalComponent,
};
