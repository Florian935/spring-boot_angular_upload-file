import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { CoreModule } from './core/core.module';

const MATERIALS = [MatButtonModule, MatToolbarModule];

@NgModule({
    declarations: [AppComponent],
    imports: [
        CoreModule,
        ...MATERIALS,
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
    ],
    bootstrap: [AppComponent],
})
export class AppModule {}
