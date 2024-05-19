import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserWayComponent } from './user-way.component';

describe('UserWayComponent', () => {
	let component: UserWayComponent;
	let fixture: ComponentFixture<UserWayComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			imports: [UserWayComponent],
		}).compileComponents();

		fixture = TestBed.createComponent(UserWayComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
