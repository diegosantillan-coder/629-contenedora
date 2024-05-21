import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { UserWayComponent } from '../user-way/user-way.component';

@Component({
	selector: 'app-header',
	standalone: true,
	imports: [UserWayComponent, RouterOutlet, RouterModule, CommonModule],
	schemas: [CUSTOM_ELEMENTS_SCHEMA],
	templateUrl: './header.component.html',
	styleUrl: './header.component.scss',
})
export class HeaderComponent {
	menuEsVisible = false;

	menuItems = [
		{ label: 'Inicio', link: '#' },
		{
			label: 'Productos',
			subMenu: [
				{ label: 'Producto 1', link: '#' },
				{ label: 'Producto 2', link: '#' },
				{ label: 'Producto 3', link: '#' },
			],
		},
		{
			label: 'Servicios',
			subMenu: [
				{ label: 'Servicio 1', link: '#' },
				{ label: 'Servicio 2', link: '#' },
				{ label: 'Servicio 3', link: '#' },
			],
		},
		{ label: 'Contacto', link: '#' },
	];

	expandedMenuItems: Record<number, boolean> = {};

	toggleSubMenu(index: number): void {
		this.expandedMenuItems[index] = !this.expandedMenuItems[index];
	}

	hello($event: any): void {
		console.log($event);
	}
}
