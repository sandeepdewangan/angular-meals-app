import { ShoppingListService } from './../shopping-list.service';
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

  constructor(private slService: ShoppingListService) { }

  ngOnInit(): void {
  }

  onAddItem() {
    const ingr = new Ingredient(this.nameInput.nativeElement.value, this.amountInput.nativeElement.value);
    this.slService.addIngredient(ingr);
  }

}
