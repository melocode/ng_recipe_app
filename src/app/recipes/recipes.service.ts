import {Recipe} from "./recipe.model";
import {EventEmitter} from "@angular/core";

export class RecipesService {
  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe('A Test Recipe',
      'A Test Description',
      'https://img.lovepik.com/element/40062/6755.png_860.png!/fw/50'),
    new Recipe('A Test Recipe 2',
      'A Test Description 2',
      'https://img.lovepik.com/element/40062/6755.png_860.png!/fw/50')
  ];

  constructor() {
  }

  public getRecipes(): Recipe[] {
    //.slice() to return a copy of the array and not a reference to the array itself.
    return this.recipes.slice();
  }
}
