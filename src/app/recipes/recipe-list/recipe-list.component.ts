import { Component, OnInit, EventEmitter, Output } from '@angular/core';

import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();
  recipes: Recipe[] = [
    new Recipe('Noodles', 'Super Tasty Noodles', 'https://www.recipetineats.com/wp-content/uploads/2014/06/Stir-Fried-Noodles-Build-Your-Own-1-500x375.jpg'),
    new Recipe('Big Fat Burger', 'Its a tasty Big Burger', 'https://upload.wikimedia.org/wikipedia/commons/b/be/Burger_King_Angus_Bacon_%26_Cheese_Steak_Burger.jpg')
  ];

  constructor() { }

  ngOnInit() {
  }

  onRecipeSelected(recipe: Recipe) {
   this.recipeWasSelected.emit(recipe);
  }

}
