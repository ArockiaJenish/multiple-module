import { NgModule } from '@angular/core';
//import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { PublicComponent } from './public.component';
import { UserComponent } from './components/user/user.component';
import { SaveComponent } from './components/save/save.component';




const routes: Routes = [
  {
    path: 'public', component: PublicComponent,
    children: [
      { path: 'user', component: UserComponent },
      { path: 'save', component: SaveComponent },
      { path: '', redirectTo: 'user', pathMatch: 'full' }
    ]
  }
]


@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes),
  ]
})
export class PublicRoutingModule { }
