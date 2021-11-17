import { HttpEvent, HttpEventType, HttpResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { File } from '@shared/models/file';
import { filter, map, Observable, switchMap, tap, toArray } from 'rxjs';
import { DownloadService } from '../services/download.service';

@Component({
    selector: 'app-download-image',
    templateUrl: './download-image.component.html',
    styleUrls: ['./download-image.component.scss'],
})
export class DownloadImageComponent {
    retrievedImages$?: Observable<Array<string>>;
    base64Data?: ArrayBuffer;
    retrievedResponse?: File;
    loadingMessage?: string;
    percentDone?: number;

    constructor(private _downloadService: DownloadService) {}

    getImages(): void {
        this.retrievedImages$ = this._downloadService.getFiles().pipe(
            tap((httpEvent: HttpEvent<Array<File>>) => {
                switch (httpEvent.type) {
                    case HttpEventType.Sent:
                        this.loadingMessage = 'Downloading files ...';
                        break;

                    case HttpEventType.DownloadProgress:
                        // Compute and show the % done:
                        this.percentDone = Math.round(
                            (100 * httpEvent.loaded) /
                                (httpEvent.total ?? httpEvent.loaded)
                        );
                        this.loadingMessage = `Files are ${this.percentDone}% uploaded.`;
                        break;

                    case HttpEventType.Response:
                        this.loadingMessage = 'File was completely uploaded!';
                        break;

                    default:
                        this.loadingMessage =
                            'File surprising upload event: ${httpEvent.type}.';
                }
            }),
            filter(
                (httpEvent: HttpEvent<Array<File>>) =>
                    httpEvent.type === HttpEventType.Response
            ),
            switchMap(
                (httpEvent: HttpEvent<Array<File>>) =>
                    (httpEvent as HttpResponse<Array<File>>).body!
            ),
            map((file: File) => `data:image/jpg;base64,${file.data}`),
            toArray()
        );
    }
}
