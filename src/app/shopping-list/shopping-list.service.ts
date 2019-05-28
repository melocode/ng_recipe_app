import {Injectable} from "@angular/core";
import {Subject} from 'rxjs';

import {Ingredient} from "../shared/ingredient.model";

@Injectable({
  providedIn: 'root',
})
export class ShoppingListService {
  ingredientsChanged = new Subject<Ingredient[]>();

  private ingredients: Ingredient[] = [
    new Ingredient('apple', 3),
    new Ingredient('banana', 2)
  ];

  constructor() {
  }

  public getIngredients(): Ingredient[] {
    return this.ingredients.slice(); //.slice(), return a copy of the array.
  }

  public addIngredient(ing: Ingredient): void {
    this.ingredients.push(ing);
    this.ingredientsChanged.next(this.ingredients.slice()); //emit the updated copy each time.
  }

  public addIngredients(ingredients: Ingredient[]): void {
    // for(let ingredient of ingredients) {
    //   this.ingredients.push(ingredient);
    // }
    //the ... spreads the array into individual elements from the array.
    this.ingredients.push(...ingredients);
    this.ingredientsChanged.next(this.ingredients.slice());
  }
}
