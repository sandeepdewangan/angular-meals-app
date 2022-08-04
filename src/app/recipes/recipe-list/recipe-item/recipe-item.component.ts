import { Recipe } from './../../model/recipe.model';
import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {

  @Input() recipe: Recipe;
  @Output() selectedRecipe = new EventEmitter<void>();

  constructor() { }

  ngOnInit(): void {
  }
  onItemClick() {
    this.selectedRecipe.emit();
  }

}
