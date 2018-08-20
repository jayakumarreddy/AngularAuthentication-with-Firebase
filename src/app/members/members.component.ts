import { Component, OnInit, OnChanges } from '@angular/core';
import { AuthService } from '../auth.service';
import { AngularFireAuth } from 'angularfire2/auth';

@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.css']
})
export class MembersComponent implements OnInit {
  
  public user;
  constructor(private authService: AuthService,private afAuth: AngularFireAuth) { 
    this.afAuth.authState.subscribe((user)=>{
      this.user=user;
     })
    console.log(authService.isLoggedIn())
  }
  ngOnInit() {    
   
  }
 
  logOut(){
    this.authService.logOut();
  }

}
