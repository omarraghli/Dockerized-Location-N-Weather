import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LocalisationComponent } from './localisation/localisation.component';
import { LoginSignupComponent } from './login-signup/login-signup.component';
import { AuthService } from './Services/auth.service';

const routes: Routes = [
  {
    path: 'Localisation',
    component: LocalisationComponent,
    canActivate: [AuthService],
  },
  {
    path: '',
    component: HomeComponent,
    canActivate: [AuthService],
  },
  {
    path: 'login-signup',
    component: LoginSignupComponent,
  },
  {
    path: 'Home',
    component: HomeComponent,
    canActivate: [AuthService],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
