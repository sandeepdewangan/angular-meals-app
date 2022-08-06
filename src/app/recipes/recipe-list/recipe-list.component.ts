import { RecipeService } from './../recipe.service';
import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../model/recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[] = [];

  // inject recipe services
  constructor(private recipeService: RecipeService) { }

  ngOnInit(): void {
    // get recipe data
    this.recipes = this.recipeService.getRecipes();
  }

}
