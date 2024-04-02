import { Component, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrl: './recipe-list.component.css'
})
export class RecipeListComponent {

  @Output() recipeWasSelected = new EventEmitter<Recipe>();

  recipes: Recipe[] = [
    new Recipe("A Test Recipe", "This is simply a test", "https://glutenfreecuppatea.co.uk/wp-content/uploads/2022/01/gluten-free-smoky-paprika-chicken-recipe-featured-500x500.jpg"),
    new Recipe("Another Test Recipe", "This is simply a test", "https://glutenfreecuppatea.co.uk/wp-content/uploads/2022/01/gluten-free-smoky-paprika-chicken-recipe-featured-500x500.jpg")
  ];

  onRecipeSelected(recipe: Recipe) {
    this.recipeWasSelected.emit(recipe);
  }

}
