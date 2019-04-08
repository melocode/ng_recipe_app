import { Component, OnInit } from '@angular/core';
import {Recipe} from "../recipe.model";

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('A Test Recipe',
      'A Test Description',
      'https://img.lovepik.com/element/40062/6755.png_860.png!/fw/50'),
    new Recipe('A Test Recipe',
      'A Test Description',
      'https://img.lovepik.com/element/40062/6755.png_860.png!/fw/50')
  ];

  constructor() { }

  ngOnInit() {
  }

}
