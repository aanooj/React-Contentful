import React from "react";
import { getEntry } from "./services/contentful";

import "./styles.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fields: {
        productName: "",
        productDescription: "",
        image: []
      }
    };
  }

  componentDidMount() {
    getEntry("54O5P32wmcY0wiAY0ewA2e")
      .then(entry => this.setState(entry))
      .catch(err => this.setState(err));
  }

  fetchAllImages(images) {
    if (!images) return false;
    return images.map((image, index) => {
      const {
        title,
        imageCaption,
        imageCredits,
        photo: { fields: photo }
      } = image.fields;
      return (
        <div key={index} className="image-card">
          <h3 className="image-title">{title}</h3>
          <p className="image-caption">{imageCaption}</p>
          <span className="image-credit">{imageCredits}</span>
          <div className="image-container">
            <img
              className="image"
              src={photo.file.url}
              alt={photo.file.fileName}
            />
          </div>
        </div>
      );
    });
  }

  render() {
    const {
      fields: { title, slug, description, images }
    } = this.state;
    return (
      <div className="App">
        <h1>{title}</h1>
        <p>{description}</p>
        <div className="image-gallery">{this.fetchAllImages(images)}</div>
        <h2>{slug}</h2>
      </div>
    );
  }
}

export default App;
