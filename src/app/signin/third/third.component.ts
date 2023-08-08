import { Component } from '@angular/core';

@Component({
  selector: 'app-third',
  templateUrl: './third.component.html',
  styleUrls: ['./third.component.css']
})
export class ThirdComponent {

  clicked = false;
  clicked1 = true;
  clicked2 = false;
  clicked3 = false;
  switch()
  {
    this.clicked=!this.clicked;
    this.clicked1=!this.clicked1;
  }
  switch1()
  {
    this.clicked1=!this.clicked1;
    this.clicked=!this.clicked;
  }
  switch2()
  {
    this.clicked2=!this.clicked2;
  }
  switch3()
  {
    this.clicked3=!this.clicked3;
  }

}
