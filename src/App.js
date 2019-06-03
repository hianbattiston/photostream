import React, { Component } from "react";
import axios from "axios";
import HomeComponent from "./components/homeComponent";
import "./App.scss";

class App extends Component {
  state = {
    photos: [],
    key: "974a30b4a04073fa41a6a93758f30220",
    search: "cat",
    perpage: 30
  };

  flickrAPI() {
    const flickr = `https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${
      this.state.key
    }&tags=${
      this.state.search
    }&privacy_filter=1&safe_search=1&extras=url_m%2Cowner_name%2Cdescription%2Ctags&per_page=${
      this.state.perpage
    }&format=json&nojsoncallback=1`;
    return flickr;
  }

  async componentDidMount() {
    const { data } = await axios.get(this.flickrAPI());
    const photos = data.photos["photo"];
    this.setState({ photos });
  }

  handleChange(event) {
    this.setState({ search: event.target.value });
  }

  render() {
    const { photos, search, perpage } = this.state;
    const q = window.location.search;
    const styleQ = q === "?flickr" ? "blue" : "";

    return (
      <div className="container">
        <h1>{q === "?flickr" ? "Flickr Photo Stream" : "Photo Stream"}</h1>
        <form>
          <input
            type="text"
            name="search"
            value={search}
            onChange={this.handleChange}
          />
          <input
            type="number"
            name="perpage"
            value={perpage}
            onChange={this.handleChange}
          />
          <div onClick={this.handleSubmit}>Submit</div>
        </form>
        <div className="photos">
          <HomeComponent photos={photos} styleQ={styleQ} />
        </div>
      </div>
    );
  }
}

export default App;
