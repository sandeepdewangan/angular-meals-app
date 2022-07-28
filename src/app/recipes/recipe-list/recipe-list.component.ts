import { Component, OnInit } from '@angular/core';
import { Recipe } from '../model/recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes:Recipe[] = [
    new Recipe(
      "Farah: A delicious rice",
      "Farah is madeup of rice floor and cooked in a mud based stove.",
      "https://upload.wikimedia.org/wikipedia/commons/0/0b/Recipe_Unlimited_logo.png"
    ),
    new Recipe(
      "Patal Ke Chatni: A delicious tomato dish",
      "Patal Ke Chatni is madeup of tomato and cooked in a mild flame for long time.",
      "https://upload.wikimedia.org/wikipedia/commons/0/0b/Recipe_Unlimited_logo.png"
    ),
  ];
  
  constructor() { }

  ngOnInit(): void {
  }

}
