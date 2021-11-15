import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { DownloadImageComponent } from './components/download-image.component';
import { DownloadImageRoutingModule } from './download-image-routing.module';
import { DownloadService } from './services/download.service';

@NgModule({
    declarations: [DownloadImageComponent],
    imports: [CommonModule, DownloadImageRoutingModule, HttpClientModule],
    providers: [DownloadService],
})
export class DownloadImageModule {}
