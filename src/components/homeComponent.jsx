import React, { Component } from "react";
import PhotoComponent from "./commons/photoComponent";

class HomeComponent extends Component {
  render() {
    const { photos, styleQ } = this.props;
    return (
      <React.Fragment>
        {photos.map(photo => (
          <PhotoComponent key={photo.id} photo={photo} styleQ={styleQ} />
        ))}
      </React.Fragment>
    );
  }
}

export default HomeComponent;
