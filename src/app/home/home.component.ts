import { Component } from '@angular/core';
import {
  FormControl,
  FormGroupDirective,  Validators
} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';
import {NgForm} from '@angular/forms';
import { UserService } from '../service/user.service';


export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective  |NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent{
  emailFormControl = new FormControl('', [Validators.required, Validators.email]);

  matcher = new MyErrorStateMatcher();

  constructor(private userdata :UserService){ }
  dologin(data:any){
    this.userdata.saveUsers(data).subscribe((value)=>{
      console.warn(value)
    }); 
  }
}
