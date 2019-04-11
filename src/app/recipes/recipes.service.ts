import {Recipe} from "./recipe.model";
import {EventEmitter, Injectable} from "@angular/core";
import {Ingredient} from "../shared/ingredient.model";
import {ShoppingListService} from "../shopping-list/shopping-list.service";

@Injectable()
export class RecipesService {
  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe('Tacos Galore',
      'Some tasty tacos al pastor',
      'https://upload.wikimedia.org/wikipedia/commons/7/73/001_Tacos_de_carnitas%2C_carne_asada_y_al_pastor.jpg',
      [
        new Ingredient('Tortillas', 10),
        new Ingredient('Cebolla', 1)
      ]),
    new Recipe('Sushi Rolls',
      'Some tasty rolls',
      'https://upload.wikimedia.org/wikipedia/commons/e/e8/Osaka-style_sushi_-_RD_Kitchen_-_Sarah_Stierch.jpg',
      [
        new Ingredient('Tuna', 5),
        new Ingredient('Rice', 1)
      ])
  ];

  constructor(private slService: ShoppingListService) {
  }

  public getRecipes(): Recipe[] {
    //.slice() to return a copy of the array and not a reference to the array itself.
    return this.recipes.slice();
  }

  public addIngredientsToShoppingList(ingredients: Ingredient[]): void {
    this.slService.addIngredients(ingredients);
  }
}
