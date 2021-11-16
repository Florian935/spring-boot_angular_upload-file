import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UploadMultipleImageComponent } from './components/upload-multiple-image.component';

const routes: Routes = [{ path: '', component: UploadMultipleImageComponent }];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class UploadMultipleImageRoutingModule {}
