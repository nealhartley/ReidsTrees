import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { ServicesComponent } from './services/services.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { TestimonialsComponent } from './testimonials/testimonials.component';
import { HomeComponent } from './home/home.component';
import { RotatingComponent } from './home/rotating.component';

import {RouterModule, Routes} from '@angular/router';
import { Ng2PageScrollModule } from 'ng2-page-scroll';
import { FormsModule } from '@angular/forms';
import { FooterComponent } from './footer/footer.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


let routes: Routes = [
  {path: 'testimonials', component: TestimonialsComponent},
  {path: 'services', component: ServicesComponent},
  {path: 'contact', component: ContactUsComponent},
  {path: '', component: HomeComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    ServicesComponent,
    ContactUsComponent,
    TestimonialsComponent,
    HomeComponent,
    RotatingComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    Ng2PageScrollModule,
    FormsModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
