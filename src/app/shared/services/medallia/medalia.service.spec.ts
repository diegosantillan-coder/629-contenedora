import { TestBed } from '@angular/core/testing';

import { MedalliaFlujosFormulario } from '@shared/enums/medallia.enum';
import { MedaliaService } from './medalia.service';

describe('MedaliaService', () => {
	let service: MedaliaService;
	let mockWindow: any;

	beforeEach(() => {
		TestBed.configureTestingModule({});
		service = TestBed.inject(MedaliaService);
		mockWindow = {
			KAMPYLE_ONSITE_SDK: {
				updatePageView: jasmine.createSpy('updatePageView'),
			},
			flujo: null,
		};
	});

	it('Debería ser creado', () => {
		expect(service).toBeTruthy();
	});

	describe('mostarEncuestaMedalliaSegunFlujo', () => {
		it('Debería establecer el flujo en el objeto window y llamar a updatePageView', () => {
			service.mostarEncuestaMedalliaSegunFlujo(
				MedalliaFlujosFormulario.PAGO_EXPRESS,
				mockWindow
			);
			expect(mockWindow.flujo).toEqual(MedalliaFlujosFormulario.PAGO_EXPRESS);
			expect(mockWindow.KAMPYLE_ONSITE_SDK.updatePageView).toHaveBeenCalled();
		});

		it('Debería establecer el flujo en el objeto window global si no se proporciona windowScope', () => {
			const flujo = MedalliaFlujosFormulario.PAGO_EXPRESS;
			spyOn(mockWindow, 'KAMPYLE_ONSITE_SDK').and.returnValue({
				updatePageView: jasmine.createSpy('updatePageView'),
			});
			service.mostarEncuestaMedalliaSegunFlujo(flujo, mockWindow);
			expect(mockWindow.flujo).toEqual(flujo);
			expect(mockWindow.KAMPYLE_ONSITE_SDK.updatePageView).toHaveBeenCalled();
		});
	});
});
