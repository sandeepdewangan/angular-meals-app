import { Recipe } from './model/recipe.model';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: []
})
export class RecipesComponent implements OnInit {

  recipe: Recipe;

  constructor() { }

  ngOnInit(): void {
  }

  selectedRecipe(recipe) {
    this.recipe = recipe;
  }

}
