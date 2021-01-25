import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// components
import { LogInSignUpComponent } from './components/header/log-in-sign-up/log-in-sign-up.component';
import { HomePageComponent } from './components/home-page/home-page.component';
const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'exchange-app', component: HomePageComponent },
  { path: 'login', component: LogInSignUpComponent },
  { path: '**', component: HomePageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
