import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainpageComponent } from './mainpage/mainpage.component';
import { ShomeComponent } from './signup/shome/shome.component';
import { FirstPageComponent } from './signin/first-page/first-page.component';
import { SecondComponent } from './signin/second/second.component';
import { ThirdComponent } from './signin/third/third.component';

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
  },
  {
    path:'signin',
    component:FirstPageComponent
  },
  {
    path:'signins',
    component:SecondComponent
  },
  {
    path:'signint',
    component:ThirdComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
