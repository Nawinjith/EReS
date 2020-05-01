import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {MatSnackBarModule} from '@angular/material';



//material
import {
  MatToolbarModule,
  MatSidenavModule,
  MatIconModule,
  MatListModule ,
  MatStepperModule,
  MatInputModule,

} from '@angular/material';



import { AppComponent } from './app.component';
import { LoginComponent } from './Auth/login/login.component';
import { NavComponent } from './Auth/nav/nav.component';
import { SidebarComponent } from './Auth/sidebar/sidebar.component';
import { FooterComponent } from './Auth/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { UserlandingComponent } from './components/userlanding/userlanding.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NavComponent,
    SidebarComponent,
    FooterComponent,
    HomeComponent,
    UserlandingComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatStepperModule,
    MatInputModule,
    MatSnackBarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
