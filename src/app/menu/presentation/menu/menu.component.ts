import { NgClass, NgFor, NgIf } from '@angular/common';
import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MenuItem } from '@menu/domain/models/menu-item.model';
import { MenuRepository } from '@menu/domain/repositories/menu.repository';
import { MenuRepositoryImpl } from '@menu/infrastructure/repositories/menu.repository.impl';
import { MenuSectionComponent } from '@menu/presentation/menu-section/menu-section.component';

@Component({
	selector: 'app-menu',
	standalone: true,
	imports: [NgFor, NgIf, NgClass, RouterModule, MenuSectionComponent],
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
	@Input() menuDesktopItems: MenuItem[] = [];
	expandedMenuItems: boolean[] = [];

	constructor(private menuRepository: MenuRepositoryImpl) {}

	ngOnChanges(changes: SimpleChanges): void {
		if (changes['menuDesktopItems']) {
			this.expandedMenuItems = new Array(this.menuDesktopItems.length).fill(
				false
			);
		}
	}

	toggleSubMenu(index: number): void {
		this.menuDesktopItems[index];
		this.expandedMenuItems = this.expandedMenuItems.map((_, i) =>
			i === index ? !this.expandedMenuItems[i] : false
		);
	}
	closeMenu(menuItem: MenuItem): void {
		console.log(menuItem);
		this.menuRepository.setMenuVisible(false);
	}
}
