import { Subscription } from 'rxjs';
import { AppModule } from './../../app.module';
import { ShoppingListService } from './../shopping-list.service';
import { Ingredient } from './../../recipes/model/ingredient.model';
import { Component, ElementRef, OnInit, ViewChild, EventEmitter, Output, OnDestroy } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit, OnDestroy {
  @ViewChild('f', { static: false }) slForm: NgForm;
  susbscription: Subscription;
  editedItemIndex: number;
  editMode = false;
  editedItem: Ingredient;
  constructor(private slService: ShoppingListService) { }

  ngOnInit(): void {
    this.susbscription = this.slService.startedEditing.subscribe(
      (index: number) => {
        this.editMode = true;
        this.editedItemIndex = index;
        this.editedItem = this.slService.getIngredient(index);
        // set the form dynamically
        this.slForm.setValue(
          { name: this.editedItem.name, amount: this.editedItem.amount }
        );
      }
    );
  }

  onSubmit(form: NgForm) {
    const value = form.value;
    const newIngredient = new Ingredient(value.name, value.amount);
    if (this.editMode) {
      this.slService.updateIngredient(this.editedItemIndex, newIngredient);
    } else {
      this.slService.addIngredient(newIngredient);
    }
    this.editMode = false;
    this.slForm.reset();
  }

  ngOnDestroy(): void {
    this.susbscription.unsubscribe();
  }

}
