import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatProgressBarModule } from '@angular/material/progress-bar';
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
