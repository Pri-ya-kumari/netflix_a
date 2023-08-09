import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {ReactiveFormsModule} from '@angular/forms';
import {MatIconModule} from '@angular/material/icon';
import { BlockTwoComponent } from './block-two/block-two.component';
import {VgCoreModule} from '@videogular/ngx-videogular/core';
import {VgControlsModule} from '@videogular/ngx-videogular/controls';
import {VgOverlayPlayModule} from '@videogular/ngx-videogular/overlay-play';
import {VgBufferingModule} from '@videogular/ngx-videogular/buffering';
import { BlockThreeComponent } from './block-three/block-three.component';
import { BlockFourComponent } from './block-four/block-four.component';
import { BlockFiveComponent } from './block-five/block-five.component';
import { FaqComponent } from './faq/faq.component';
import {CdkAccordionModule} from '@angular/cdk/accordion';
import {MatExpansionModule} from '@angular/material/expansion';
import { FoteerComponent } from './foteer/foteer.component';
import {MatSelectModule} from '@angular/material/select';
import { MainpageComponent } from './mainpage/mainpage.component';
import { ShomeComponent } from './signup/shome/shome.component';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { FirstPageComponent } from './signin/first-page/first-page.component';
import { HeaderComponent } from './signin/header/header.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule }   from '@angular/forms';
import { FooterComponent } from './signin/footer/footer.component';
import { SecondComponent } from './signin/second/second.component';
import { ThirdComponent } from './signin/third/third.component';
import { FourthComponent } from './signin/fourth/fourth.component';





@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BlockTwoComponent,
    BlockThreeComponent,
    BlockFourComponent,
    BlockFiveComponent,
    FaqComponent,
    FoteerComponent,
    MainpageComponent,
    ShomeComponent,
    FirstPageComponent,
    HeaderComponent,
    FooterComponent,
    SecondComponent,
    ThirdComponent,
    FourthComponent
  ],
  imports: [
    BrowserModule,
    MatFormFieldModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSelectModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    FormsModule, ReactiveFormsModule,
    MatIconModule,
    VgCoreModule,
    VgControlsModule,
    CdkAccordionModule,
    VgOverlayPlayModule,
    VgBufferingModule,
    HttpClientModule,
    MatExpansionModule,
    MatCheckboxModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
