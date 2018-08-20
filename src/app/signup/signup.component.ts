import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  
  constructor(public authServie: AuthService) { }

  ngOnInit() {
  }
  onSubmit(formData: NgForm){
    if(formData.valid){
      console.log(formData);
      this.authServie.signUp(formData.value.email,formData.value.password)
    }
  }
}
