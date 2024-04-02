import { Component, EventEmitter, Input, Output } from '@angular/core';

import { Recipe } from '../../recipe.model';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrl: './recipe-item.component.css'
})
export class RecipeItemComponent {

  // We need to get this recipe from outside
  // We want to bind it from our recipe-list component
  @Input() recipe: Recipe;

  // @Output so the event can be listened to from outside
  @Output() recipeSelected = new EventEmitter<void>();

  onSelected() {
    this.recipeSelected.emit();
  }

}
