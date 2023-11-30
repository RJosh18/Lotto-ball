import "./App.css";
import { Component } from "react";
import "./Lottery.css";
import "./Ball.css";
import Lottery from "./Lottery";

class App extends Component {
  render() {
    return (
      <div>
        <div className="Lottery">
          <Lottery />
        </div>
        <div className="Lottery">
          <Lottery title="Mini daily" maxNums={10} maxBalls={4} />
        </div>
      </div>
    );
  }
}

export default App;
