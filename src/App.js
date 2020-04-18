import React from "react";
import { getEntry } from "../services/contentful";

import "./styles.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fields: {
        productName: "",
        image: []
      }
    };
  }

  componentDidMount() {
    getEntry("4BqrajvA8E6qwgkieoqmqO")
      .then(entry => this.setState(entry))
      .catch(err => this.setState(err));
  }

  render() {
    const {
      fields: { productName, productDescription, image }
    } = this.state;
    const img = image.map(img => <img src={img.fields.file.url} alt="image" />);
    return (
      <div className="App">
        <h1>{productName}</h1>
        <div className="image__container">{img}</div>
        <h2>{productDescription}</h2>
      </div>
    );
  }
}

export default App;
