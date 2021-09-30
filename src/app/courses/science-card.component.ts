import { Component, Input } from "@angular/core";

@Component({
    selector: "khanacademy-science-card",
    templateUrl: "science-card.component.html"
})

export class ScienceCardComponent{
    @Input()
    title! :string;
    @Input()
    text! :string;
    @Input()
    imagePath! :string;
}