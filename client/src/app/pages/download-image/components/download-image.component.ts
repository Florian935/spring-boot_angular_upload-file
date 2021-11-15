import { Component } from '@angular/core';
import { File } from '@shared/models/file';
import { map, Observable, switchMap, toArray } from 'rxjs';
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

    constructor(private _downloadService: DownloadService) {}

    getImages(): void {
        this.retrievedImages$ = this._downloadService.getFiles().pipe(
            switchMap((value) => value),
            map((file: File) => `data:image/jpg;base64,${file.data}`),
            toArray()
        );
    }
}
