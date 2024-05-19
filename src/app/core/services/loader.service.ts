import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
	providedIn: 'root',
})
export class LoaderService {
	private loader = new BehaviorSubject<boolean>(false);
	private countLoader: number = 0;

	initLoader(): void {
		this.countLoader++;
		if (this.countLoader > 0) {
			this.loader.next(true);
		}
	}

	stopLoader(): void {
		this.countLoader--;
		if (this.countLoader <= 0) {
			this.loader.next(false);
		}
	}

	showLoader(): Observable<boolean> {
		return this.loader.asObservable();
	}
}
