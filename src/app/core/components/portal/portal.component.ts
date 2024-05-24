import {
	CUSTOM_ELEMENTS_SCHEMA,
	Component,
	OnInit,
	inject,
} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SessionService } from '@auth/application/services/session.service';
import { UsuarioSeus } from '@auth/domain/models/usuario-seus.model';
import { HOME_ENCUESTA } from '@shared/enums/medallia.enum';
import { MedaliaService } from '@shared/services/medallia/medalia.service';
import { HeaderComponent } from '../header/header.component';

@Component({
	selector: 'app-portal',
	standalone: true,
	imports: [HeaderComponent, RouterOutlet],
	templateUrl: './portal.component.html',
	styleUrl: './portal.component.scss',
	schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class PortalComponent implements OnInit {
	usuario: UsuarioSeus | undefined;
	private readonly sessionService = inject(SessionService);
	private medalliaService = inject(MedaliaService);

	ngOnInit(): void {
		this.getUserInfo();
		this.medalliaService.mostrarEncuestaMedallia(HOME_ENCUESTA);
	}
	getUserInfo(): void {
		this.sessionService.getUserInfo().subscribe((usuario) => {
			this.usuario = usuario;
		});
	}

	skip($event: any): void {
		const event = $event;
	}
}
