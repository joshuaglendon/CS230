import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";
import { LoginResponse } from "./loginResponse";

@Injectable({
    providedIn: 'root'
})
export class LoginService {
    baseUrl:string = "https://identitytoolkit.googleapis.com/v1/accounts";
    signUpEndpoint:string = "signUp";
    signInEndpoint:string = "signInWithPassword";
    
    public constructor(private http:HttpClient){
    }
    
    
    public signUp(email:string, password:string){
        const requestBody = {
            "email":email,
            "password":password,
            "returnSecureToken":true
        };
        return this.http.post<LoginResponse>(this.baseUrl + ':' + this.signUpEndpoint + '?' + 'key=' + environment.firebase.apiKey, requestBody);
    }

    public logIn(email:string, password:string) {
        const requestBody = {
            "email":email,
            "password":password,
            "returnSecureToken":true
        };
        return this.http.post<LoginResponse>(this.baseUrl + ':' + this.signInEndpoint + '?' + 'key=' + environment.firebase.apiKey, requestBody);
    }
}