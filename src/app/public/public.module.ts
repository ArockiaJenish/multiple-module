import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './components/user/user.component';
import { SaveComponent } from './components/save/save.component';
import { PublicComponent } from './public.component';
import { PublicRoutingModule } from './public-routing.module';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    UserComponent,
    SaveComponent,
    PublicComponent
  ],
  imports: [
    CommonModule,
    PublicRoutingModule,
    RouterModule
  ]
})
export class PublicModule { }
