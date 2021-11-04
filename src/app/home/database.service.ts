import { Injectable } from "@angular/core";
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { Observable } from "rxjs";
import { Science } from "../courses/science.model";
import { UserInfo } from "../header/user-info.model";

@Injectable({
    providedIn: 'root'
})

export class DatabaseService{
    items: Observable<Science []>;
    constructor(private db:AngularFireDatabase){
        console.log("setting up firebase communication");
        this.items = this.db.list<Science>("science").valueChanges();
    }

    public showData() {
        this.items.subscribe((data:Science []) => {
            console.log("data received");
            for (let item of data){
                console.log(item);
            }
        })
    }
}