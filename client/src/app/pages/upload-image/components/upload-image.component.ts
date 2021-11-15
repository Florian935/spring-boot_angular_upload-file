import { HttpEvent, HttpEventType } from '@angular/common/http';
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
    percentDone?: number;

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
                    .subscribe((httpEvent: HttpEvent<string>) => {
                        switch (httpEvent.type) {
                            case HttpEventType.Sent:
                                this.message = `Uploading file "${file.name}" of size ${file.size}.`;
                                break;

                            case HttpEventType.UploadProgress:
                                // Compute and show the % done:
                                this.percentDone = Math.round(
                                    (100 * httpEvent.loaded) /
                                        (httpEvent.total ?? 0)
                                );
                                this.message = `File "${file.name}" is ${this.percentDone}% uploaded.`;
                                break;

                            case HttpEventType.Response:
                                this.message = `File "${file.name}" was completely uploaded!`;
                                break;

                            default:
                                this.message = `File "${file.name}" surprising upload event: ${httpEvent.type}.`;
                        }
                    });
            }
        }

        this.selectedFiles = undefined;
    }
}
