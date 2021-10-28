import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { UserInfo } from "./user-info.model";

@Injectable({providedIn: 'root'})
export class UserInfoService{
    private baseUrl:string = 'https://khanacademy-app-default-rtdb.firebaseio.com/';
    private myInfoEndpoints = 'my-info.json';
    constructor(private http: HttpClient){

    }

    getUserInfo(){
        return this.http.get<UserInfo>(this.baseUrl + this.myInfoEndpoints);
    }

    modifyUserInfo(data:UserInfo){
        var temp:UserInfo = {
            FirstName: "Joshua",
            LastName: "Glendon",
            mix_id: "jbg0019",
            GitHub: "https://github.com/joshuaglendon/WVU_CS230"
        }
        return this.http.put(this.baseUrl + this.myInfoEndpoints, temp);
    }
}