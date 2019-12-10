import React from "react";

function Score(props) {
  return (
    <ul>
      <li>
        Score : {props.score} | Top Score : {props.topScore}
      </li>
    </ul>
  );
}

export default Score;
