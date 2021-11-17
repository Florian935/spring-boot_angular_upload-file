import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { DownloadImageComponent } from './components/download-image.component';
import { DownloadImageRoutingModule } from './download-image-routing.module';
import { DownloadService } from './services/download.service';
import { MatProgressBarModule } from '@angular/material/progress-bar';

const MATERIALS = [MatProgressBarModule];

@NgModule({
    declarations: [DownloadImageComponent],
    imports: [
        CommonModule,
        ...MATERIALS,
        DownloadImageRoutingModule,
        HttpClientModule,
    ],
    providers: [DownloadService],
})
export class DownloadImageModule {}
