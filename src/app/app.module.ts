import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeAppComponent } from './pages/home-app/home-app.component';
import { GalleryAppComponent } from './pages/gallery-app/gallery-app.component';
import { ContactAppComponent } from './pages/contact-app/contact-app.component';

import { FormAppComponent } from './pages/contact-app/form-app/form-app.component';
import { GalleryService } from './services/gallery.service';


@NgModule({
  declarations: [
    AppComponent,
    HomeAppComponent,
    GalleryAppComponent,
    ContactAppComponent,
    FormAppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [GalleryService],
  bootstrap: [AppComponent]
})
export class AppModule { }
