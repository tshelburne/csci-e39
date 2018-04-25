import React, {Component} from "react";

class AuthorNames extends React.Component {
  render() {
    const children = React.Children.toArray(this.props.children)
    return (
    <p className="byline">Created by: <a href="http://ryanseay.com" target="_blank" rel="author">{children.sort().join('')}</a> </p>
    );
  }
}

export default AuthorNames
