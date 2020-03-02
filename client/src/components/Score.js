import React from "react";

function Score(props) {
  return (
    <ul>
      <li>
        Score : {props.score} | Top Score : {props.topScore} / 16 (
        {(props.topScore / 16) * 100} %)
      </li>
    </ul>
  );
}

export default Score;
