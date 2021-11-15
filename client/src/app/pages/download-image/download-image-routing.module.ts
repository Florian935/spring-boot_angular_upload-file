import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DownloadImageComponent } from './components/download-image.component';

const routes: Routes = [{ path: '', component: DownloadImageComponent }];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class DownloadImageRoutingModule {}
