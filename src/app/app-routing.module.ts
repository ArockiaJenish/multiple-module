import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './auth/auth.component';
import { PublicComponent } from './public/public.component';

const routes: Routes = [
  { path: 'public', component: PublicComponent },
  { path: 'auth', component: AuthComponent },
  { path: '', redirectTo: 'auth/admin', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
