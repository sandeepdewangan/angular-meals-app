import { EventEmitter } from '@angular/core';
import { Ingredient } from "../recipes/model/ingredient.model";

export class ShoppingListService {
    // to get newly inserted data of ingredient we can user emitter.
    ingredientChanged = new EventEmitter<Ingredient[]>();
    private ingredients: Ingredient[] = [
    ];

    getIngredients() {
        return this.ingredients.slice();
    }

    addIngredient(ing: Ingredient) {
        this.ingredients.push(ing);
        // update to all that new data is available
        this.ingredientChanged.emit(this.ingredients.slice());
    }

    addIngredients(ingredients: Ingredient[]) {
        // Method 01:
        // This method will emit event whenever each ingredient is added.

        // for(let i of ingredients){
        //     this.addIngredient(i);
        // }

        // Method 02:
        this.ingredients.push(...ingredients);
        // Now emit event
        this.ingredientChanged.emit(this.ingredients.slice());
    }

}