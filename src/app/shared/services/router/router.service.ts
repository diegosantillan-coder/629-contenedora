import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Rutas } from '@shared/enums/routes.enum';

@Injectable({
	providedIn: 'root',
})
export class RouterService {
	constructor(private router: Router) {}

	accessDenied(): void {
		this.router.navigate([Rutas.ACCESS_DENIED], {
			skipLocationChange: true,
		});
	}
}
