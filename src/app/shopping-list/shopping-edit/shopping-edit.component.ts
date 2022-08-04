import { Ingredient } from './../../recipes/model/ingredient.model';
import { Component, ElementRef, OnInit, ViewChild, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {

  @ViewChild('amountInput') amountInput: ElementRef;
  @ViewChild('nameInput') nameInput: ElementRef;

  @Output() ingredientAdded = new EventEmitter<Ingredient>();

  constructor() { }

  ngOnInit(): void {
  }

  onAddItem() {
    const ingredient = new Ingredient(this.nameInput.nativeElement.value, this.amountInput.nativeElement.value);
    this.ingredientAdded.emit(ingredient);
  }

}
