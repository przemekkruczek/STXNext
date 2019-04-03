import React from "react";

export class BookItem extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    console.log(this.props.book);
    return (
      <div className="item__book item">
        <img
          alt={this.props.book.volumeInfo.title}
          className="ui image"
          src={this.props.book.volumeInfo.imageLinks.thumbnail}
        />
        <div className="content">
          <div className="header">{this.props.book.volumeInfo.title}</div>
          <div className="description">
            {this.props.book.volumeInfo.description}
          </div>
        </div>
      </div>
    );
  }
}
