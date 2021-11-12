import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { LoginService } from './login.service';
import { LoginResponse } from './loginResponse';
import { UserSignUp } from './user-signup.model';
import { UserSignUpService } from './user-signup.service';

@Component({
  selector: 'khanacademy-signup-email',
  templateUrl: './signup-email.component.html',
})
export class SignupEmailComponent implements OnInit {

  constructor(private authService:LoginService) { 

  }

  ngOnInit(): void {
  }


  public onSubmit(data: NgForm){
    console.log("button clicked");
    console.log(data.value);
    this.authService.signUp(data.value.email, data.value.Password).subscribe(
      (data:LoginResponse) => {
        console.log(data);
      },
      error => {
        console.log(error.error.error.message);
      }
    );
    data.resetForm();
  }

}