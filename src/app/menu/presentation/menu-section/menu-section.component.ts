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

	ngOnChanges(changes: SimpleChanges): void {
		if (changes['menuDesktopItems']) {
			this.expandedMenuItems = new Array(this.menuDesktopItems.length).fill(
				false
			);
		}
	}
	toggleSubMenu(index: number): void {
		console.log(index);
		this.expandedMenuItems[index] = !this.expandedMenuItems[index];
	}
}
