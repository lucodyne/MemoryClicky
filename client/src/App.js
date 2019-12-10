import React, { Component } from "react";
import Top from "./components/Top";
import Score from "./components/Score";
import Card from "./components/Card";
import json from "./json.json";
import { BrowserRouter as Router, Route } from "react-router-dom";

class App extends Component {
  state = { score: 0, topScore: 0, food: json };

  // Fisher-Yates (Knuth) Shuffle
  shuffle = () => {
    let dontMessWithState = new Array(...this.state.food);
    let currentIndex = dontMessWithState.length,
      temporaryValue,
      randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      // And swap it with the current element.
      temporaryValue = dontMessWithState[currentIndex];
      dontMessWithState[currentIndex] = dontMessWithState[randomIndex];
      dontMessWithState[randomIndex] = temporaryValue;
    }
    this.setState({ food: dontMessWithState });
  };

  componentDidMount() {
    this.shuffle();
  }

  plusOne = () => {
    let plusOne = this.state.score;
    plusOne++;
    this.setState({ score: plusOne });
    if (this.state.topScore < plusOne) {
      this.setState({ topScore: plusOne });
    }
  };

  scoreZero = () => {
    this.setState({ score: 0 });
  };

  handleClick = imgID => {
    let dontMessWithState = new Array(...this.state.food);
    dontMessWithState.forEach(element => {
      if (element.imgID === imgID) {
        if (!element.flag) {
          console.log("plusOne!");
          this.plusOne();
          element.flag = 1;
          this.setState({ food: dontMessWithState });
        } else {
          console.log("lose!");
          dontMessWithState.forEach(element => {
            element.flag = 0;
          });
          this.setState({ food: dontMessWithState });
          this.scoreZero();
        }
      }
      console.log(this.state.food);
      console.log(`SCORE: ${+this.state.score} TOP: ${this.state.topScore}`);
      this.shuffle();
    });
  };

  render() {
    return (
      <Router>
        <Route path="*">
          <Top>
            <Score
              score={this.state.score}
              topScore={this.state.topScore}
            ></Score>
          </Top>
          <div className="container">
            <br />
            <br />
            <div className="row">
              <div className="col s11 offset-s1">
                {this.state.food.map(food => (
                  <Card
                    imgID={food.imgID}
                    key={food.imgID}
                    handleClick={this.handleClick}
                  ></Card>
                ))}
              </div>
            </div>
          </div>
        </Route>
      </Router>
    );
  }
}

export default App;
