import { Ingredient } from './ingredient.model';
export class Recipe {
    public rname: string;
    public description: string;
    public imagePath: string;
    public ingredients: Ingredient[];

    constructor(rname: string, desc: string, imgPath: string, ing: Ingredient[]) {
        this.rname = rname;
        this.description = desc;
        this.imagePath = imgPath;
        this.ingredients = ing;
    }
}