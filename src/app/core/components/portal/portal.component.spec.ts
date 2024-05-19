import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HttpClientModule } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { PortalComponent } from './portal.component';

describe('PortalComponent', () => {
	let component: PortalComponent;
	let fixture: ComponentFixture<PortalComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			imports: [
				PortalComponent,
				RouterTestingModule.withRoutes([
					{ path: 'sin-acceso', redirectTo: '' },
				]),
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
