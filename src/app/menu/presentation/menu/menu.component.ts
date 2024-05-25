import { NgClass, NgFor, NgIf } from '@angular/common';
import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MenuItem } from '@menu/domain/models/menu-item.model';
import { MenuRepository } from '@menu/domain/repositories/menu.repository';
import { MenuRepositoryImpl } from '@menu/infrastructure/repositories/menu.repository.impl';

@Component({
	selector: 'app-menu',
	standalone: true,
	imports: [NgFor, NgIf, NgClass, RouterModule],
	providers: [
		{
			provide: MenuRepository,
			useClass: MenuRepositoryImpl,
		},
	],
	templateUrl: './menu.component.html',
	styleUrl: './menu.component.scss',
})
export class MenuComponent implements OnChanges {
	@Input() menuItems: MenuItem[] = [];
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
