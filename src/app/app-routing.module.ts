import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { UserlistingComponent } from './userlisting/userlisting.component';
import { AuthGuard } from './guard/auth.guard';
import { DonateComponent } from './donate/donate.component';
import { DonationliComponent } from './donationli/donationli.component';
import { PublicComponent } from './public/public.component';




const routes: Routes = [
  {path:'',component:HomeComponent, canActivate:[AuthGuard] },
  {path:'public', component:PublicComponent},
  {path:'register', component:RegisterComponent},
  {path:'login', component:LoginComponent},
  {path:'admin/user', component:UserlistingComponent, canActivate:[AuthGuard]},
  {path:'donate', component:DonateComponent},
  {path:'donationli', component:DonationliComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
