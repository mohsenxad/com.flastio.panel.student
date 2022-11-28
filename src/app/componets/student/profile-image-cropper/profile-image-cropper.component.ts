import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { base64ToFile, ImageCroppedEvent, LoadedImage } from 'ngx-image-cropper';

@Component({
  selector: 'profile-image-cropper',
  templateUrl: './profile-image-cropper.component.html',
  styleUrls: ['./profile-image-cropper.component.scss']
})
export class ProfileImageCropperComponent implements OnInit {

	constructor() { }

	ngOnInit(): void {
	}


	@Input() selectedProfileImage: any;
	@Output() onClose = new EventEmitter();
  	@Output() onCropped = new EventEmitter<any>();
	croppedImage: any;

	fileChangeEvent(event: any): void {
		//this.imageChangedEvent = event;
		console.log(event);
		
	}
	imageCropped(event: ImageCroppedEvent) {
		this.croppedImage = event.base64;
		console.log(event);
	}
	imageLoaded(image: LoadedImage) {
		// show cropper
	}
	cropperReady() {
		// cropper ready
	}
	loadImageFailed() {
		// show message
	}

	cancel()
		{
			this.onClose.emit()
		}
	
	done()
		{
			const imageFile: any = base64ToFile(this.croppedImage);
			this.onCropped.emit(imageFile);
		}

}
