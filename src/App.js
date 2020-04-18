import React from "react";
import { getEntry } from "../services/contentful";

import "./styles.css";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      message: "hello"
    };
    getEntry("7LAnCobuuWYSqks6wAwY2a")
      .then(entry => this.setState(entry))
      .catch(err => this.setState(err));
  }

  render() {
    return (
      <div className="App">
        <h1>Hello {this.state.message}</h1>
        <h2>Start editing to see some magic happen!</h2>
      </div>
    );
  }
}

export default App;
