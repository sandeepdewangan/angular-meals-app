import { EventEmitter } from '@angular/core';
import { Recipe } from "./model/recipe.model";

export class RecipeService {
    recipeSelected = new EventEmitter<Recipe>();

    private recipes: Recipe[] = [
        new Recipe(
            "Farah: A delicious rice",
            "Farah is madeup of rice floor and cooked in a mud based stove.",
            "https://1.bp.blogspot.com/-w-6jFe4uSPs/Wm4fLYkMOsI/AAAAAAAAcE4/ekS0PDPfreU5-xDKVXN-hbAm68AfrekjgCLcBGAs/s1600/Fara%252C%2BRice%2Bflour%2BDumplings.jpg"
        ),
        new Recipe(
            "Patal Ke Chatni: A delicious tomato dish",
            "Patal Ke Chatni is madeup of tomato and cooked in a mild flame for long time.",
            "https://1.bp.blogspot.com/-w-6jFe4uSPs/Wm4fLYkMOsI/AAAAAAAAcE4/ekS0PDPfreU5-xDKVXN-hbAm68AfrekjgCLcBGAs/s1600/Fara%252C%2BRice%2Bflour%2BDumplings.jpg"
        ),

    ];

    getRecipes() {
        return this.recipes.slice();
    }
}