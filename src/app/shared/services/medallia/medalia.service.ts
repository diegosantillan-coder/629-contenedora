import { Injectable } from '@angular/core';
import { MedalliaFlujosFormulario } from '@shared/enums/medallia.enum';

@Injectable({
	providedIn: 'root',
})
export class MedaliaService {
	mostarEncuestaMedalliaSegunFlujo(
		flujo: MedalliaFlujosFormulario,
		windowScope?: Window
	): void {
		const windowLocal = windowScope ?? (window as any);
		windowLocal.flujo = flujo;
		windowLocal.KAMPYLE_ONSITE_SDK.updatePageView();
	}

	mostrarEncuestaMedallia(id: number, windowScope?: Window): void {
		const windowLocal = windowScope ?? (window as any);
		if (windowLocal.KAMPYLE_ONSITE_SDK?.isSurveyDisplayed) {
			windowLocal.KAMPYLE_ONSITE_SDK.closeForm(id);
			return;
		}
		windowLocal.KAMPYLE_ONSITE_SDK?.showForm(id);
	}
}
