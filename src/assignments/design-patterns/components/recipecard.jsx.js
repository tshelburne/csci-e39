import React, {Component} from "react";

import {RecipeName} from './recipename.jsx'
import {RecipeTime} from './recipetime.jsx'
import RecipeStars from './recipestars.jsx'
import {RecipeImage} from './recipeimage.jsx'

class RecipeCard extends React.Component {
  render() {
    return (
      <div className="card">
  <RecipeImage className="image" />
  <div className="description">
    <RecipeName recipeName="Chips & Murphy" />
    <RecipeTime recipeTime="1h 30m" />
    <RecipeStars />
  </div>
</div>
    );
  }
}

export default RecipeCard
