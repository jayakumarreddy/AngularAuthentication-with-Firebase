import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { AngularFireAuth } from 'angularfire2/auth';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private authService: AuthService,private router: Router,private afAuth: AngularFireAuth) { 
    this.afAuth.authState.subscribe((user)=>{
      if(user){
        this.router.navigateByUrl('/members');
      }
    })
  }

  ngOnInit() {
  }

  loginFb(){
  this.authService.loginFB();
  }
  loginGoogle(){
   this.authService.loginGoogle();
  }
  logout(){
    this.authService.logOut();
  }

}
