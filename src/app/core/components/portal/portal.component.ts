import {
	CUSTOM_ELEMENTS_SCHEMA,
	Component,
	OnInit,
	inject,
} from '@angular/core';
import { SessionService } from '@auth/application/services/session.service';
import { UsuarioSeus } from '@auth/domain/models/usuario-seus.model';

@Component({
	selector: 'app-portal',
	standalone: true,
	imports: [],
	templateUrl: './portal.component.html',
	styleUrl: './portal.component.scss',
	schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class PortalComponent implements OnInit {
	ngOnInit(): void {
		this.getUserInfo();
	}
	usuario: UsuarioSeus | undefined;
	private readonly sessionService = inject(SessionService);

	getUserInfo(): void {
		this.sessionService.getUserInfo().subscribe((usuario) => {
			this.usuario = usuario;
		});
	}

	skip($event: any): void {
		console.log($event);
	}
}
