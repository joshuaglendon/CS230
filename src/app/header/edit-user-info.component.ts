import { Component } from "@angular/core";
import { DatabaseService } from "../home/database.service";
import { UserInfo } from "./user-info.model";
import { UserInfoService } from "./user-info.service";

@Component({
    selector: 'khanacademy-edit-user-info',
    templateUrl: 'edit-user-info.component.html'
})

export class EditUserInfoComponent{

    constructor(private infoService: UserInfoService, private dbService:DatabaseService) {

    }

    onUpdateUserInfo(data:UserInfo) {
        console.log("you pressed a button");
        this.infoService.modifyUserInfo(data).subscribe(data => {
            console.log("Updated your information");
        });
    }
}