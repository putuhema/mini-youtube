import React, { Component } from "react";
import SearchBar from "./SearchBar";
import youtube from "../api/youtube";

class App extends Component {
  onTermSubmit = async (term) => {
    try {
      const res = await youtube.get("/search", {
        params: {
          q: term,
        },
      });

      console.log(res);
    } catch (err) {
      console.log(err);
    }
  };
  render() {
    return (
      <div className='ui container'>
        <SearchBar onTermSubmit={this.onTermSubmit} />
      </div>
    );
  }
}

export default App;
