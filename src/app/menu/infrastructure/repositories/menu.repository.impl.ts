import { Injectable, inject } from '@angular/core';
import { MenuItem } from '@menu/domain/models/menu-item.model';
import { MenuRepository } from '@menu/domain/repositories/menu.repository';
import { MenuService } from '@menu/infrastructure/services/menu.service';
import { Observable } from 'rxjs';

@Injectable({
	providedIn: 'root',
})
export class MenuRepositoryImpl implements MenuRepository {
	private menuService = inject(MenuService);
	getMenu(): Observable<MenuItem[]> {
		return this.menuService.getMenu();
	}

	setMenuVisible(isVisible: boolean): void {
		this.menuService.setMenuVisible(isVisible);
	}
	getMenuVisible(): Observable<boolean> {
		return this.menuService.getMenuVisible();
	}
}
