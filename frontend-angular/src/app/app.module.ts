import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './Auth/login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';



import { HomeComponent } from './home/home.component';
import { NavComponent } from './Auth/nav/nav.component';
import { UserlandingComponent } from './userlanding/userlanding.component';
import { SidebarComponent } from './Auth/sidebar/sidebar.component';
import { FooterComponent } from './Auth/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    NavComponent,
    UserlandingComponent,
    SidebarComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
