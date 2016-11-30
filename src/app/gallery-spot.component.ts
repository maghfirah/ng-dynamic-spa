import { Component, Input } from '@angular/core';

@Component({
	selector:'gallery-spot',
	template: `
		<img [src]="img" alt="" *ngFor="let img of data.images" />
	`
})
export class GallerySpotComponent {
	@Input()
	public data;
}