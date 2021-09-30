export class Science{
    title: string;
    text: string;
    imagePath: string;

    constructor({title, text, imagePath} :
        {title:string, text:string, imagePath:string}){
            this.title = title;
            this.text = text;
            this.imagePath = imagePath;
        }

}