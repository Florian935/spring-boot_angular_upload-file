import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UploadMultipleImageRoutingModule } from './upload-multiple-image-routing.module';
import { UploadMultipleImageComponent } from './components/upload-multiple-image.component';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { FlexLayoutModule } from '@angular/flex-layout';

const MATERIALS = [MatProgressBarModule];

@NgModule({
    declarations: [UploadMultipleImageComponent],
    imports: [
        ...MATERIALS,
        FlexLayoutModule,
        CommonModule,
        UploadMultipleImageRoutingModule,
    ],
})
export class UploadMultipleImageModule {}
