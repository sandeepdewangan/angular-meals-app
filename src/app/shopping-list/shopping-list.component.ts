import { Ingredient } from './../recipes/model/ingredient.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {

  ingredients: Ingredient[] = [
    new Ingredient("Tomato", 50),
    new Ingredient("Rice Floor", 20),
  ];
  constructor() { }

  ngOnInit(): void {
  }
  onIngredientAdded(ingredient) {
    this.ingredients.push(
      ingredient
    );
  }

}
