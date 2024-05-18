import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { seusGuard } from './seus.guard';

describe('seusGuard', () => {
	const executeGuard: CanActivateFn = (...guardParameters) =>
		TestBed.runInInjectionContext(() => seusGuard(...guardParameters));

	beforeEach(() => {
		TestBed.configureTestingModule({});
	});

	it('should be created', () => {
		expect(executeGuard).toBeTruthy();
	});
});
