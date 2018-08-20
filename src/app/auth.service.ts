import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { Observable } from 'rxjs';
import { Router, UrlSerializer } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
 
public user: Observable<firebase.User>;
public currentUser:any = null;

  constructor(private firebaseAuth: AngularFireAuth,private router: Router ) {
    this.user=this.firebaseAuth.authState;
    this.user.subscribe((user)=>{
      if(user){
        this.currentUser=user;
      }
      else{
        this.currentUser=null;
      }
    })
   }

   isLoggedIn(){
    console.log('current User',this.currentUser)
     return this.currentUser?true:false;
   }

   signUp(email: string,password: string){
     this.firebaseAuth.auth.createUserWithEmailAndPassword(email,password)
     .then((value)=>{
         console.log('return value after signUp',value)
       }
     )
     .catch(err=>{
       console.log('something went wrong at signUp',err) 
     })
   }

   login(email: string,password: string){
     this.firebaseAuth.auth.signInWithEmailAndPassword(email,password)
     .then((value)=>{
       console.log('login Success',value);
       this.router.navigateByUrl('/members');
     })
     .catch((err)=>{
      console.log('login failed',err)
     })
   }
   loginFB(){
     var provider = new firebase.auth.FacebookAuthProvider();
     this.firebaseAuth.auth.signInWithPopup(provider)
     .then((value)=>{
      console.log('Successfull fb signin',value);
      this.router.navigateByUrl('/members');
     })
     .catch((err)=>{
      console.log('failed fb sign in',err);
      
     })
   }

   loginGoogle(){
    var provider = new firebase.auth.GoogleAuthProvider();
    this.firebaseAuth.auth.signInWithPopup(provider)
     .then((value)=>{
      console.log('Successfull google signin',value);
      this.router.navigateByUrl('/members');
     })
     .catch((err)=>{
      console.log('failed google sign in',err);
      
     })
   }
   logOut(){
     this.firebaseAuth.auth.signOut()
     .then(()=>{
       console.log('log out Successfull')
       this.router.navigateByUrl('/login')
     })
     .catch((err)=>{
      console.log('LogOut UnSuccessfull');
      
     })
   }
   

}
