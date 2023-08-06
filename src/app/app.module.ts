import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
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
    MatExpansionModule,
    MatCheckboxModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
