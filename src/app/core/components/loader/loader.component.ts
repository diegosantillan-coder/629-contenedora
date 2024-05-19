import { AsyncPipe, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { LoaderService } from '@core/services/loader.service';
import { Observable } from 'rxjs';

@Component({
	selector: 'app-loader',
	standalone: true,
	imports: [NgIf, AsyncPipe],
	templateUrl: './loader.component.html',
	styleUrl: './loader.component.scss',
})
export class LoaderComponent {
	loader: Observable<boolean> = this.loaderService.showLoader();

	constructor(private loaderService: LoaderService) {}
}
