import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UploadService } from './services/upload.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
    declarations: [],
    imports: [CommonModule, HttpClientModule],
    exports: [CommonModule],
    providers: [UploadService],
})
export class CoreModule {}
