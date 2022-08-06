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



  constructor() { }

  ngOnInit(): void {

  }

}
