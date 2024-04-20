import { Component, EventEmitter, Input } from '@angular/core';

import { Recipe } from '../../recipe.model';
import { RecipeService } from '../../recipe.service';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrl: './recipe-item.component.css'
})
export class RecipeItemComponent {

  // We need to get this recipe from outside
  // We want to bind it from our recipe-list component
  @Input() recipe: Recipe;

  constructor(private recipeService: RecipeService) {

  }

  onSelected() {
    this.recipeService.recipeSelected.emit(this.recipe);
  }

}
