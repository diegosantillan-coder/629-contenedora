import { NgFor, NgIf } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MenuItem } from '@menu/domain/models/menu-item.model';

@Component({
	selector: 'app-menu',
	standalone: true,
	imports: [NgFor, NgIf, RouterModule],
	templateUrl: './menu.component.html',
	styleUrl: './menu.component.scss',
})
export class MenuComponent {
	@Input() menuItems: MenuItem[] = [];
	expandedMenuItems: boolean[] = [];

	toggleSubMenu(index: number): void {
		this.expandedMenuItems[index] = !this.expandedMenuItems[index];
	}
	closeMenu(menuItem: MenuItem): void {}
}
