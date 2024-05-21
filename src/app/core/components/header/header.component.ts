import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, Component } from '@angular/core';
import { Router, RouterModule, RouterOutlet } from '@angular/router';
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
	constructor(private router: Router) {}
	menuItems = [
		{ label: 'Inicio', link: '' },
		{
			label: 'Productos',
			subMenu: [
				{ label: 'Home', link: 'home' },
				{ label: 'Producto 2', link: 'producto2' },
				{ label: 'Producto 3', link: 'producto3' },
			],
		},
		{
			label: 'Servicios',
			subMenu: [
				{ label: 'Servicio 1', link: 'servicio1' },
				{ label: 'Servicio 2', link: 'servicio2' },
				{ label: 'Servicio 3', link: 'servicio3' },
			],
		},
		{ label: 'Contacto', link: 'contacto' },
	];

	expandedMenuItems: Record<number, boolean> = {};

	toggleSubMenu(index: number): void {
		this.expandedMenuItems[index] = !this.expandedMenuItems[index];
	}

	hello($event: any): void {
		console.log($event);
	}

	navegar(link: string): void {
		console.log(link);
		this.router.navigate([link]);
		this.menuEsVisible = !this.menuEsVisible;
	}
}
