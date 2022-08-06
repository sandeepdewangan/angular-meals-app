import { EventEmitter } from '@angular/core';
import { Ingredient } from "../recipes/model/ingredient.model";

export class ShoppingListService {
    // to get newly inserted data of ingredient we can user emitter.
    ingredientChanged = new EventEmitter<Ingredient[]>();
    private ingredients: Ingredient[] = [
        new Ingredient("Tomato", 50),
        new Ingredient("Rice Floor", 20),
    ];

    getIngredients() {
        return this.ingredients.slice();
    }

    addIngredient(ing: Ingredient) {
        this.ingredients.push(ing);
        // update to all that new data is available
        this.ingredientChanged.emit(this.ingredients.slice());
    }

}