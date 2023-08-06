import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlockTwoComponent } from './block-two/block-two.component';
import { MainpageComponent } from './mainpage/mainpage.component';
import { ShomeComponent } from './signup/shome/shome.component';

const routes: Routes = [
  {
    path:'',
    redirectTo:'/mainpage',
    pathMatch:'full'
  },
  {
    path:'mainpage',
    component:MainpageComponent,
  },
  {
    path:'signup',
    component:ShomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
