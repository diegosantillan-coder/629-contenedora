import { NgClass, NgFor, NgIf } from '@angular/common';
import { Component, Input, SimpleChanges } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MenuItem } from '@menu/domain/models/menu-item.model';
import { MenuRepository } from '@menu/domain/repositories/menu.repository';
import { MenuRepositoryImpl } from '@menu/infrastructure/repositories/menu.repository.impl';

@Component({
	selector: 'app-menu-mobile',
	standalone: true,
	imports: [NgFor, NgIf, NgClass, RouterModule],
	providers: [
		{
			provide: MenuRepository,
			useClass: MenuRepositoryImpl,
		},
	],
	templateUrl: './menu-mobile.component.html',
	styleUrl: './menu-mobile.component.scss',
})
export class MenuMobileComponent {
	@Input() menuItems: MenuItem[] = [];
	@Input() menuDesktopItems: MenuItem[] | undefined = [];
	expandedMenuItems: boolean[] = [];

	constructor(private menuRepository: MenuRepositoryImpl) {}

	ngOnChanges(changes: SimpleChanges): void {
		if (changes['menuItems']) {
			this.expandedMenuItems = new Array(this.menuItems.length).fill(false);
		}
	}

	toggleSubMenu(index: number): void {
		this.menuItems[index];
		this.expandedMenuItems = this.expandedMenuItems.map((_, i) =>
			i === index ? !this.expandedMenuItems[i] : false
		);
	}
	closeMenu(menuItem: MenuItem): void {
		console.log(menuItem);
		this.menuRepository.setMenuVisible(false);
	}
}
