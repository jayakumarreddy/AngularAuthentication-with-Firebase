import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AngularFireAuth } from 'angularfire2/auth';

@Component({
  selector: 'app-email',
  templateUrl: './email.component.html',
  styleUrls: ['./email.component.css']
})
export class EmailComponent implements OnInit {

  constructor(public authService: AuthService,private router:Router,private afAuth: AngularFireAuth) { 
    // this.afAuth.authState.subscribe((user)=>{
    //   if(user){
    //     this.router.navigateByUrl('/members');
    //   }
    // })
  }

  ngOnInit() {
    
  }
  onSubmit(formData: NgForm){
    if(formData.valid){
      this.authService.login(formData.value.email,formData.value.password);
    }
  }

}
