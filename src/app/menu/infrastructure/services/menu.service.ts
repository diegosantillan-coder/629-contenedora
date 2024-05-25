import { Injectable } from '@angular/core';
import { menuMock } from '@menu/application/mocks/menu.mock';
import { MenuItem } from '@menu/domain/models/menu-item.model';
import { Observable, of } from 'rxjs';

@Injectable({
	providedIn: 'root',
})
export class MenuService {
	getMenu(): Observable<MenuItem[]> {
		return of(menuMock);
	}
}
