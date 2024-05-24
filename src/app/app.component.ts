import { Component, Renderer2 } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CONFIG_ENVIRONMENT } from '@shared/config/environment.config';
import { JavaScripts } from '@shared/enums/params.enum';
import { ConfigEnv } from '@shared/models/config-app.interface';
import { LoaderComponent } from './core/components/loader/loader.component';

@Component({
	selector: 'app-root',
	standalone: true,
	imports: [RouterOutlet, LoaderComponent],
	templateUrl: './app.component.html',
	styleUrl: './app.component.scss',
})
export class AppComponent {
	title = '629-contenedora';
	private readonly ambiente: ConfigEnv = CONFIG_ENVIRONMENT;

	constructor(private renderer: Renderer2) {
		this.addMedallia();
	}

	private addMedallia(): void {
		const medallia = this.ambiente.scripts[JavaScripts.MEDALLIA_ENCUESTA];
		if (medallia) {
			this.appendScript({
				type: 'text/javascript',
				src: `${medallia}`,
				crossOrigin: 'anonymous',
			});
		}
	}

	private appendScript(attributes: Object): void {
		const script: HTMLScriptElement = this.renderer.createElement('script');
		Object.entries(attributes).forEach((attribute) => {
			script.setAttribute(attribute[0], attribute[1]);
		});
		this.renderer.appendChild(document.head, script);
	}
}
