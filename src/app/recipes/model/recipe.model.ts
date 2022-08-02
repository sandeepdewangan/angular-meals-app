export class Recipe {
    public rname: string;
    public description: string;
    public imagePath: string;

    constructor(rname: string, desc: string, imgPath: string) {
        this.rname = rname;
        this.description = desc;
        this.imagePath = imgPath;
    }
}