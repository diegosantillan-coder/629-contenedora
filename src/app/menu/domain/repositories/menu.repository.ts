import { MenuItem } from '@menu/domain/models/menu-item.model';
import { Observable } from 'rxjs';

export abstract class MenuRepository {
	abstract getMenu(): Observable<MenuItem[]>;
	abstract setMenuVisible(isVisible: boolean): void;
	abstract getMenuVisible(): Observable<boolean>;
}