import { HttpClient, HttpEvent } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { File } from '@shared/index';
import { Observable } from 'rxjs';

const httpOptions = {
    responseType: 'json' as const,
    reportProgress: true,
    observe: 'events' as const,
};

@Injectable()
export class DownloadService {
    baseUrl = 'http://localhost:8080';

    constructor(private _http: HttpClient) {}

    getFileById(id: number): Observable<File> {
        return this._http.get<File>(`${this.baseUrl}/files/${id}`);
    }

    getFiles(): Observable<HttpEvent<Array<File>>> {
        return this._http.get<Array<File>>(
            `${this.baseUrl}/files`,
            httpOptions
        );
    }
}
