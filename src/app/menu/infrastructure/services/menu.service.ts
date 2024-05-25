import { Injectable } from '@angular/core';
import { menuMock } from '@menu/application/mocks/menu.mock';
import { MenuItem } from '@menu/domain/models/menu-item.model';
import { BehaviorSubject, Observable, of } from 'rxjs';

@Injectable({
	providedIn: 'root',
})
export class MenuService {
	private menuVisibleSubject = new BehaviorSubject<boolean>(false);
	menuVisible$ = this.menuVisibleSubject.asObservable();

	getMenu(): Observable<MenuItem[]> {
		return of(menuMock);
	}
	setMenuVisible(visible: boolean): void {
		this.menuVisibleSubject.next(visible);
	}

	getMenuVisible(): Observable<boolean> {
		return this.menuVisible$;
	}
}
