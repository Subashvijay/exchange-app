import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// components
import { LogInSignUpComponent } from './header/log-in-sign-up/log-in-sign-up.component';
import { HomePageComponent } from './home-page/home-page.component';
const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'login', component: LogInSignUpComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
