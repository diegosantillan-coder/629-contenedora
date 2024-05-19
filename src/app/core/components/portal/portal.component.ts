import { Component, OnInit, inject } from '@angular/core';
import { SessionService } from '@auth/application/services/session.service';

@Component({
	selector: 'app-portal',
	standalone: true,
	imports: [],
	templateUrl: './portal.component.html',
	styleUrl: './portal.component.scss',
})
export class PortalComponent implements OnInit {
	ngOnInit(): void {
		this.getUserInfo();
	}
	private readonly sessionService = inject(SessionService);

	getUserInfo(): void {
		this.sessionService.getUserInfo().subscribe((usuario) => {
			console.log(usuario);
		});
	}
}
