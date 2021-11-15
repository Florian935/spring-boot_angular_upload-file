import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { File } from '@shared/index';
import { Observable } from 'rxjs';

@Injectable()
export class DownloadService {
    baseUrl = 'http://localhost:8080';

    constructor(private _http: HttpClient) {}

    getFiles(): Observable<Array<File>> {
        return this._http.get<any>(`${this.baseUrl}/files`);
    }

    getFileById(id: number): Observable<File> {
        return this._http.get<File>(`${this.baseUrl}/files/${id}`);
    }
}
