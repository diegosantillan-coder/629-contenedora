import { NgFor, NgIf } from '@angular/common';
import { Component, Input, SimpleChanges } from '@angular/core';
import { MenuItem } from '@menu/domain/models/menu-item.model';

@Component({
	selector: 'app-menu-section',
	standalone: true,
	imports: [NgFor, NgIf],
	templateUrl: './menu-section.component.html',
	styleUrl: './menu-section.component.scss',
})
export class MenuSectionComponent {
	@Input() menuDesktopItems: MenuItem[] = [];
	expandedMenuItems: boolean[] = [];
	selectedSubMenu: MenuItem[] | null = null;

	ngOnChanges(changes: SimpleChanges): void {
		if (changes['menuDesktopItems']) {
			this.expandedMenuItems = new Array(this.menuDesktopItems.length).fill(
				false
			);
		}
	}
	toggleSubMenu(index: number): void {
		this.expandedMenuItems = this.expandedMenuItems.map((_, i) =>
			i === index ? !this.expandedMenuItems[i] : false
		);
		this.selectedSubMenu = this.expandedMenuItems[index]
			? this.menuDesktopItems[index].subMenu || null
			: null;

		console.log(this.selectedSubMenu);
	}
}
