import { RecipeService } from './recipe.service';
import { Recipe } from './model/recipe.model';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: [],
  providers: [RecipeService],
})
export class RecipesComponent implements OnInit {

  recipe: Recipe;

  constructor(private recipeService: RecipeService) { }

  ngOnInit(): void {
    // Listen to any changes via subscribe.
    this.recipeService.recipeSelected.subscribe(
      (r: Recipe) => {
        this.recipe = r;
      }
    );
  }

}
