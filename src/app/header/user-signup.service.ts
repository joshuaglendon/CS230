import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { UserSignUp } from "./user-signup.model";



@Injectable({providedIn: 'root'})
export class UserSignUpService{
    private baseUrl:string = 'https://khanacademy-app-default-rtdb.firebaseio.com/.json'
    
    constructor(private http: HttpClient){

    }

    postUserInfo(data:UserSignUp){
        return this.http.post(this.baseUrl, data);
    }

}