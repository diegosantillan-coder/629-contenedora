import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, Component } from '@angular/core';
import { Router, RouterModule, RouterOutlet } from '@angular/router';
import { MenuItem } from '@menu/domain/models/menu-item.model';
import { MenuComponent } from '@menu/presentation/menu/menu.component';
import { UserWayComponent } from '../user-way/user-way.component';

@Component({
	selector: 'app-header',
	standalone: true,
	imports: [
		UserWayComponent,
		MenuComponent,
		RouterOutlet,
		RouterModule,
		CommonModule,
	],
	schemas: [CUSTOM_ELEMENTS_SCHEMA],
	templateUrl: './header.component.html',
	styleUrl: './header.component.scss',
})
export class HeaderComponent {
	menuEsVisible = false;
	constructor(private router: Router) {}
	menuItems: MenuItem[] = [];

	expandedMenuItems: Record<number, boolean> = {};

	toggleSubMenu(index: number): void {
		this.expandedMenuItems[index] = !this.expandedMenuItems[index];
	}

	hello($event: any): void {
		const event = $event;
	}

	navegar(link: string): void {
		this.router.navigate([link]);
		this.menuEsVisible = !this.menuEsVisible;
	}
}
