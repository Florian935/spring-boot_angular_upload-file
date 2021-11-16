import { HttpEvent, HttpEventType } from '@angular/common/http';
import { Component } from '@angular/core';
import { FileUi } from '@shared/interfaces/file-ui';
import { UploadService } from 'src/app/core/services/upload.service';

@Component({
    selector: 'app-upload-multiple-image',
    templateUrl: './upload-multiple-image.component.html',
    styleUrls: ['./upload-multiple-image.component.scss'],
})
export class UploadMultipleImageComponent {
    selectedFiles: Array<FileUi> = [];

    constructor(private _uploadService: UploadService) {}

    selectFiles(event: Event): void {
        const fileList: FileList | null = (event.target as HTMLInputElement)
            .files;
        const files: Array<File> | null = this.getSelectedFiles(fileList);

        if (files) {
            this.selectedFiles = files.map((file: File) => {
                return { file };
            });
        }

        console.log(this.selectedFiles);
    }

    upload(): void {
        if (this.selectedFiles) {
            this.selectedFiles.forEach((fileUi: FileUi) => {
                this._uploadService
                    .upload(fileUi.file!)
                    .subscribe((httpEvent: HttpEvent<string>) => {
                        switch (httpEvent.type) {
                            case HttpEventType.Sent:
                                fileUi.message = `Uploading file "${
                                    fileUi.file!.name
                                }" of size ${fileUi.file!.size}.`;
                                break;

                            case HttpEventType.UploadProgress:
                                // Compute and show the % done:
                                fileUi.percentDone = Math.round(
                                    (100 * httpEvent.loaded) /
                                        (httpEvent.total ?? 0)
                                );
                                fileUi.message = `File "${
                                    fileUi.file!.name
                                }" is ${fileUi.percentDone}% uploaded.`;
                                break;

                            case HttpEventType.Response:
                                fileUi.message = `File "${
                                    fileUi.file!.name
                                }" was completely uploaded!`;
                                break;

                            default:
                                fileUi.message = `File "${
                                    fileUi.file!.name
                                }" surprising upload event: ${httpEvent.type}.`;
                        }
                    });
            });
        }

        //     this.selectedFiles = this.selectedFiles.map((fileUi: FileUi) => {
        //         return { ...fileUi, file: undefined };
        //     });
    }

    private getSelectedFiles(
        selectedFiles: FileList | null
    ): Array<File> | null {
        if (selectedFiles) {
            let files: Array<File> = [];

            for (let i = 0; i < selectedFiles.length; i++) {
                files = [...files, selectedFiles.item(i)!];
            }

            return files;
        }

        return null;
    }
}
