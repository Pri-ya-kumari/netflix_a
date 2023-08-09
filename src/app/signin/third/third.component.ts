import { Component } from '@angular/core';

@Component({
  selector: 'app-third',
  templateUrl: './third.component.html',
  styleUrls: ['./third.component.css']
})
export class ThirdComponent {

  clicked = false;
  clicked1 = false;
  clicked2 = false;
  clicked3 = true;
  switch()
  {
    this.clicked=!this.clicked;
    this.clicked1=false;
    this.clicked2=false;
    this.clicked3=false;
  }
  switch1()
  {
    this.clicked=false;
    this.clicked1=!this.clicked1;
    this.clicked2=false;
    this.clicked3=false;
  }
  switch2()
  {
    this.clicked2=!this.clicked2;
    this.clicked=false;
    this.clicked1=false;
    this.clicked3=false;
  }
  switch3()
  {
    this.clicked3=!this.clicked3;
    this.clicked=false;
    this.clicked1=false;
    this.clicked2=false;

  }

}
