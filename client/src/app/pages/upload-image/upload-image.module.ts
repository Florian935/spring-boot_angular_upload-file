import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UploadImageRoutingModule } from './upload-image-routing.module';
import { UploadImageComponent } from './components/upload-image.component';
import { HttpClientModule } from '@angular/common/http';
import { UploadService } from './services/upload.service';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatProgressBarModule } from '@angular/material/progress-bar';

const MATERIALS = [MatProgressBarModule];

@NgModule({
    declarations: [UploadImageComponent],
    imports: [
        CommonModule,
        ...MATERIALS,
        FlexLayoutModule,
        HttpClientModule,
        UploadImageRoutingModule,
    ],
    providers: [UploadService],
})
export class UploadImageModule {}
