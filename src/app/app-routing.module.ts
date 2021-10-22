import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactAppComponent } from './pages/contact-app/contact-app.component';
import { GalleryAppComponent } from './pages/gallery-app/gallery-app.component';
import { HomeAppComponent } from './pages/home-app/home-app.component';

const routes: Routes = [
  {path:'gallery',component:GalleryAppComponent},
  {path:'',component:HomeAppComponent},
  {path:'contact',component:ContactAppComponent},
  { path: '**', pathMatch: 'full', component: HomeAppComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
