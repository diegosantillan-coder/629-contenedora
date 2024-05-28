import { NgFor, NgIf } from '@angular/common';
import { Component, Input } from '@angular/core';
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

	toggleSubMenu(index: number): void {
		console.log(index);
	}
}
