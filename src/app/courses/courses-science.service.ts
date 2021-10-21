import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Science } from "./science.model";

@Injectable({providedIn: 'root'})
export class ScienceService{
    private baseUrl:string = 'https://khanacademy-app-default-rtdb.firebaseio.com/';
    private ScienceEndpoints = 'science.json';
    private Card1 = 'science/Card1.json';

    constructor(private http: HttpClient){

    }

    getCards(){
        return this.http.get<Science []>(this.baseUrl + this.ScienceEndpoints);
    }

    getCard1(){
        return this.http.get<Science []>(this.baseUrl + this.Card1);
    }
}

