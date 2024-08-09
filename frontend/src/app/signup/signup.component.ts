import { Component } from '@angular/core';
import { AuthService } from './auth.service';
import {Router} from '@angular/router';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  email=""
  password="";

  constructor(private authservice:AuthService,
    private router:Router

  )
  {
    

  }
  onsubmit(){
    const user={
      email:this.email,
      password:this.password
    };

    this.authService.signup(user).subscribe{
      ()=>this.router.navigate(['/login']),
      (err)=>console.error(err)
    };
    
  }

}
