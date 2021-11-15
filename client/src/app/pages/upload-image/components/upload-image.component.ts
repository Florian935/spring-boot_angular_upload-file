import { Component } from '@angular/core';
import { UploadService } from '../services/upload.service';

@Component({
    selector: 'app-upload-image',
    templateUrl: './upload-image.component.html',
    styleUrls: ['./upload-image.component.scss'],
})
export class UploadImageComponent {
    selectedFiles?: FileList;
    currentFile?: File;
    message?: string;

    constructor(private _uploadService: UploadService) {}

    selectFile(event: any): void {
        this.selectedFiles = event.target.files;
    }

    upload(): void {
        if (this.selectedFiles) {
            const file: File | null = this.selectedFiles.item(0);

            if (file) {
                this.currentFile = file;

                this._uploadService
                    .upload(this.currentFile)
                    .subscribe((responseMessage: string) => {
                        this.message = responseMessage;
                    });
            }
        }

        this.selectedFiles = undefined;
    }
}
