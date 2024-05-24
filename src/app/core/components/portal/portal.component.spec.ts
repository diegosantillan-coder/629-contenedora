import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HttpClientModule } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterModule } from '@angular/router';
import { PortalComponent } from './portal.component';

describe('PortalComponent', () => {
	let component: PortalComponent;
	let fixture: ComponentFixture<PortalComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			imports: [
				PortalComponent,
				RouterModule.forRoot([]),
				HttpClientModule,
				HttpClientTestingModule,
			],
		}).compileComponents();

		fixture = TestBed.createComponent(PortalComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
