import { EventEmitter } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";

export class ShoppingListService {
    
    ingredientsChanged = new EventEmitter<Ingredient[]>(); // Type it passes on is an array of ingredients

    private ingredients = [
        new Ingredient('Apples', 5),
        new Ingredient('Tomatoes', 10)
      ];

    getIngredients() {
        return this.ingredients.slice(); // Returns a copy
    }

    addIngredient(ingredient: Ingredient) {
        // Adding doesn't work in the browser as we are returning a copy above
        // We need to inform our component of the change
        this.ingredients.push(ingredient);

        // Now we always have the right ingredients and inform other components about this in the event emitter here
        this.ingredientsChanged.emit(this.ingredients.slice());
    }

    addIngredients(ingredients: Ingredient[]) {
        // for (let ingredient of ingredients) {
        //     this.addIngredient(ingredient); // Would create a lot of events which we don't want!
        // }

        // Directly add all ingredients in one go and then emit the event
        this.ingredients.push(...ingredients); // Spread operator "..." turns an array of elements into a list of elements
        this.ingredientsChanged.emit(this.ingredients.slice())
    }

}