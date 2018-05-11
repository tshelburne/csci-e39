import React, {Component} from "react";

class RecipeStars extends React.Component {
  render() {
    return (
      <div>
        <h5 className="sub">Rating</h5>
        <h4>
          <i className="fa fa-star"></i>
          <i className="fa fa-star"></i>
          <i className="fa fa-star"></i>
          <i className="fa fa-star-o"></i>
          <i className="fa fa-star-o"></i>
        </h4>
      </div>
    );
  }
}

export default RecipeStars
