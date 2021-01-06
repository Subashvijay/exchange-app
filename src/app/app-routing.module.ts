import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// components
import { LogInSignUpComponent } from './header/log-in-sign-up/log-in-sign-up.component';
const routes: Routes = [
  { path: 'login', component: LogInSignUpComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
