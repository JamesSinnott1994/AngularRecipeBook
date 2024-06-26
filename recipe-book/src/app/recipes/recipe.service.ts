import { EventEmitter, Injectable } from "@angular/core";
import { Recipe } from "./recipe.model";
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";

@Injectable()
export class RecipeService {

    recipeSelected = new EventEmitter<Recipe>();

    private recipes: Recipe[] = [
        new Recipe(
            "A Test Recipe", 
            "This is simply a test", 
            "https://glutenfreecuppatea.co.uk/wp-content/uploads/2022/01/gluten-free-smoky-paprika-chicken-recipe-featured-500x500.jpg",
            [new Ingredient("Meat", 1), new Ingredient("French Fries", 20)]),
        new Recipe(
            "Another Test Recipe",
            "This is simply a test",
            "https://glutenfreecuppatea.co.uk/wp-content/uploads/2022/01/gluten-free-smoky-paprika-chicken-recipe-featured-500x500.jpg",
            [new Ingredient("Buns", 2), new Ingredient("Meat", 1)])
    ];

    constructor(private slService: ShoppingListService) {}

    getRecipes() {
        // return this.recipes(); // Returns direct reference
        return this.recipes.slice(); // Returns copy of the array, so can't really access "recipes" above
    }

    addIngredientsToShoppingList(ingredients: Ingredient[]) {
        this.slService.addIngredients(ingredients);
    }

}