import { Component } from "@angular/core";

@Component({
    selector: 'app-alert',
    templateUrl: './alert.component.html',
    styleUrls: ['./alert.component.css']
})
export class AlertComponent {
    text:String = "We'll get right to the point: we're asking you to help support Khan Academy. We're a nonprofit that relies on support from people like you."
    strong1:String ="If everyone reading this gives $12 montly, Khan Academy can continue to thrive for years."
    text1:String = "Please help keep Khan Academy free, for anyone, anywhere forever."
}