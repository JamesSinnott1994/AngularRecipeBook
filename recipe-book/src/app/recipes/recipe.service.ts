import { Recipe } from "./recipe.model";

export class RecipeService {

    private recipes: Recipe[] = [
        new Recipe("A Test Recipe", "This is simply a test", "https://glutenfreecuppatea.co.uk/wp-content/uploads/2022/01/gluten-free-smoky-paprika-chicken-recipe-featured-500x500.jpg"),
        new Recipe("Another Test Recipe", "This is simply a test", "https://glutenfreecuppatea.co.uk/wp-content/uploads/2022/01/gluten-free-smoky-paprika-chicken-recipe-featured-500x500.jpg")
    ];

    getRecipes() {
        // return this.recipes(); // Returns direct reference
        return this.recipes.slice(); // Returns copy of the array, so can't really access "recipes" above
    }

}