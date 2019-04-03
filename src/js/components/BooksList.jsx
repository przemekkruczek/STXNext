import React from "react";
import { BookItem } from "./BookItem.jsx";
import InfiniteScroll from "react-infinite-scroll-component";

export class BooksList extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const renderedList = this.props.books.map(book => {
      return (
        <BookItem
          key={book.volumeInfo.industryIdentifiers[0].identifier}
          book={book}
        />
      );
    });
    return <div className="ui relaxed divided list">{renderedList}</div>;
  }
}
