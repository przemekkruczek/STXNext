import React from "react";
import { Header } from "./Header.jsx";
import { SearchBar } from "./SearchBar.jsx";
import { BooksList } from "./BooksList.jsx";
import bookapi from "../apis/bookapi.jsx";

export class App extends React.Component {
  constructor() {
    super();
    this.state = {
      books: []
    };
  }

  onTermSubmit = async term => {
    const response = await bookapi.get("/volumes", {
      params: {
        q: term
      }
    });
    this.setState({ books: response.data.items });
  };
  render() {
    return (
      <div>
        <Header />
        <div className="ui container">
          <SearchBar onFormSubmit={this.onTermSubmit} />
          <BooksList books={this.state.books} />
        </div>
      </div>
    );
  }
}
