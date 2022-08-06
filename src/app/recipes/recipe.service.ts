import { Subject } from 'rxjs';
import { ShoppingListService } from './../shopping-list/shopping-list.service';
import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from './model/ingredient.model';
import { Recipe } from "./model/recipe.model";

@Injectable()
export class RecipeService {
    private recipes: Recipe[] = [
        new Recipe(
            "Farah: A delicious rice",
            "Farah is madeup of rice floor and cooked in a mud based stove.",
            "https://i0.wp.com/www.manjulikapramod.com/wp-content/uploads/2018/11/Farah-Chhattisgarhi-cuisine.jpg",
            [
                new Ingredient('Rice Floor', 30),
                new Ingredient('Steamed Rice', 15),
                new Ingredient('Oil', 120),
            ],
        ),
        new Recipe(
            "Patal Ke Chatni: A delicious tomato dish",
            "Patal Ke Chatni is madeup of tomato and cooked in a mild flame for long time.",
            "https://www.funfoodfrolic.com/wp-content/uploads/2020/06/Tomato-Chutney.jpg",
            [
                new Ingredient('Tomato', 50),
                new Ingredient('Jeera', 5),
                new Ingredient('Oil', 120),
            ],
        ),

    ];

    getRecipe(index: number) {
        return this.recipes[index];
    }

    getRecipes() {
        return this.recipes.slice();
    }

    constructor(private slService: ShoppingListService) { }
    // here we need to inject shopping list service to access it.
    addIngredientToShoppingList(ingr: Ingredient[]) {
        this.slService.addIngredients(ingr);
    }
}