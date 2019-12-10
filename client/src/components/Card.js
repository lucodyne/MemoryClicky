import React, { Component } from "react";
import "./style.css";

class Card extends Component {
  render() {
    return (
      <img
        className="responsive-img z-depth-2 hoverable circle"
        src={`./images/${this.props.imgID}.jpg`}
        onClick={() => this.props.handleClick(this.props.imgID)}
        alt="food"
      ></img>
    );
  }
}
export default Card;
