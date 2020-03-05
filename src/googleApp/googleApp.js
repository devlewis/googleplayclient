import React from "react";

function GoogleApp(props) {
  return (
    <div className="g-app">
      <h2>{props.App}</h2>
      <div className="category">Category: {props.Category}</div>
      <div className="rating">Rating: {props.Rating}</div>
      <div className="price">Price: {props.Price}</div>
      <div className="content Rating">
        Content Rating: {props["Content Rating"]}
      </div>
      <div className="genres">Genres: {props.Genres}</div>
    </div>
  );
}

export default GoogleApp;
