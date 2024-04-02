import { Component, Input } from '@angular/core';

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

}
