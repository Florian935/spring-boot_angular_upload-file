import { HttpClient, HttpEvent, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const httpOptions = {
    responseType: 'text' as const,
    reportProgress: true,
    observe: 'events' as const,
};

@Injectable()
export class UploadService {
    private baseUrl = 'http://localhost:8080';

    constructor(private _http: HttpClient) {}

    upload(file: File): Observable<HttpEvent<string>> {
        const formData: FormData = new FormData();
        formData.append('file', file);

        return this._http.post(`${this.baseUrl}/files`, formData, httpOptions);
    }
}
