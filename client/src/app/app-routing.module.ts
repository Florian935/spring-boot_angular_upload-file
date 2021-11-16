import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    {
        path: 'upload-image',
        loadChildren: () =>
            import('./pages/upload-image/upload-image.module').then(
                (m) => m.UploadImageModule
            ),
    },
    {
        path: 'upload-multiple-image',
        loadChildren: () =>
            import(
                './pages/upload-multiple-image/upload-multiple-image.module'
            ).then((m) => m.UploadMultipleImageModule),
    },
    {
        path: 'download-image',
        loadChildren: () =>
            import('./pages/download-image/download-image.module').then(
                (m) => m.DownloadImageModule
            ),
    },
    { path: '', redirectTo: 'upload-image', pathMatch: 'full' },
    { path: '**', redirectTo: 'upload-image' },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
