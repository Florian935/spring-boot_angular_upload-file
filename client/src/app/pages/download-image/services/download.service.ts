import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class DownloadService {
    baseUrl = 'http://localhost:8080';

    constructor(private _http: HttpClient) {}

    getFiles(): Observable<any> {
        return this._http.get<any>(`${this.baseUrl}/files`);
    }

    getFileById(id: number): Observable<any> {
        return this._http.get<any>(`${this.baseUrl}/files/${id}`);
    }
}
