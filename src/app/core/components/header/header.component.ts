import { CommonModule } from '@angular/common';
import {
	CUSTOM_ELEMENTS_SCHEMA,
	Component,
	OnInit,
	inject,
} from '@angular/core';
import { Router, RouterModule, RouterOutlet } from '@angular/router';
import { MenuItem } from '@menu/domain/models/menu-item.model';
import { MenuRepository } from '@menu/domain/repositories/menu.repository';
import { MenuRepositoryImpl } from '@menu/infrastructure/repositories/menu.repository.impl';
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
	providers: [{ provide: MenuRepository, useClass: MenuRepositoryImpl }],
	schemas: [CUSTOM_ELEMENTS_SCHEMA],
	templateUrl: './header.component.html',
	styleUrl: './header.component.scss',
})
export class HeaderComponent implements OnInit {
	ngOnInit(): void {
		this.cargarMenu();
	}
	menuEsVisible = false;
	menuItems: MenuItem[] = [];
	private router = inject(Router);
	private menuRepository = inject(MenuRepository);

	constructor() {
		this.menuRepository
			.getMenuVisible()
			.subscribe((visible) => (this.menuEsVisible = visible));
	}

	hello($event: any): void {
		const event = $event;
	}

	navegar(link: string): void {
		this.router.navigate([link]);
		this.menuEsVisible = !this.menuEsVisible;
	}

	toggleMenu(): void {
		this.menuEsVisible = !this.menuEsVisible;
		this.menuRepository.setMenuVisible(this.menuEsVisible);
	}

	cargarMenu(): void {
		this.menuRepository.getMenu().subscribe((menu) => {
			this.menuItems = menu;
		});
	}
}
