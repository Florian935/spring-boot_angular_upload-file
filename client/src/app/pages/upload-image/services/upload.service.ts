import { HttpClient, HttpEvent, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';

const httpOptions = {
    responseType: 'text' as const,
    reportProgress: true,
};

@Injectable()
export class UploadService {
    private baseUrl = 'http://localhost:8080';

    constructor(private _http: HttpClient) {}

    upload(file: File): Observable<string> {
        const formData: FormData = new FormData();
        formData.append('file', file);

        return this._http.post(`${this.baseUrl}/files`, formData, httpOptions);
    }
}
