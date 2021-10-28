import { Component, OnInit } from '@angular/core';
import { UserSignUp } from './user-signup.model';
import { UserSignUpService } from './user-signup.service';

@Component({
  selector: 'khanacademy-signup-email',
  templateUrl: './signup-email.component.html',
})
export class SignupEmailComponent implements OnInit {

  constructor(private signupService:UserSignUpService) { 

  }

  ngOnInit(): void {
  }

  onSignIn(data:UserSignUp){
    console.log("you pressed the button");
    console.log(data);
    this.signupService.postUserInfo(data).subscribe(data => {
      console.log("sent to backend");
    });
  }

}