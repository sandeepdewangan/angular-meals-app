import { Component, OnInit } from '@angular/core';
import { Recipe } from '../model/recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[] = [
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
    new Recipe(
      "Patal Ke Chatni: A delicious tomato dish",
      "Patal Ke Chatni is madeup of tomato and cooked in a mild flame for long time.",
      "https://1.bp.blogspot.com/-w-6jFe4uSPs/Wm4fLYkMOsI/AAAAAAAAcE4/ekS0PDPfreU5-xDKVXN-hbAm68AfrekjgCLcBGAs/s1600/Fara%252C%2BRice%2Bflour%2BDumplings.jpg"
    ),
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
