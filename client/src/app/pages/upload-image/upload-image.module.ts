import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { UploadService } from 'src/app/core/services/upload.service';
import { UploadImageComponent } from './components/upload-image.component';
import { UploadImageRoutingModule } from './upload-image-routing.module';

const MATERIALS = [MatProgressBarModule];

@NgModule({
    declarations: [UploadImageComponent],
    imports: [
        CommonModule,
        ...MATERIALS,
        FlexLayoutModule,
        UploadImageRoutingModule,
    ],
})
export class UploadImageModule {}
