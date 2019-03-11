import React, { Component } from "react";

// Components
import AuthorCard from "./AuthorCard";

class AuthorsList extends Component {
  render() {
    const authorCards = this.props.authors.map(author => (
      <AuthorCard key={author.id} author={author} deleteAuthorHandler={this.props.deleteAuthorHandler} />
    ));

    return (
      <div className="authors">
        <h3>Authors</h3>
        <div className="row">{authorCards}</div>
      </div>
    );
  }
}

export default AuthorsList;
