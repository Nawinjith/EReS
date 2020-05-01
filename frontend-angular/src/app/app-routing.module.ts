import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './Auth/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { UserlandingComponent } from './components/userlanding/userlanding.component';

const routes: Routes = [
  {path:'login',component:LoginComponent},
  {path:"", component:HomeComponent},
  {path:"landing", component:UserlandingComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
