import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { DownloadImageComponent } from './components/download-image.component';
import { DownloadImageRoutingModule } from './download-image-routing.module';

@NgModule({
    declarations: [DownloadImageComponent],
    imports: [CommonModule, DownloadImageRoutingModule],
})
export class DownloadImageModule {}
