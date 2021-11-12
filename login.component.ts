import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { LoginService } from './login.service';
import { LoginResponse } from './loginResponse';

@Component({
  selector: 'khanacademy-login',
  templateUrl: './login.component.html',
})
export class LoginComponent implements OnInit {

  constructor(private authService:LoginService) {

  }

  ngOnInit(): void {
  }

  public onSubmit(data: NgForm) {
    console.log("Button clicked");
    console.log(data.value);
    this.authService.logIn(data.value.email, data.value.password).subscribe(
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
