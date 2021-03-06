import React, { Component } from "react";

// Components
import AuthorCard from "./AuthorCard";
import {connect} from "react-redux";

class AuthorsList extends Component {
  render() {
    const authorCards = this.props.authors.map(author => (
      <AuthorCard key={author.id} author={author} />
    ));

    return (
      <div className="authors">
        <h3>Authors</h3>
        <div className="row">{authorCards}</div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    authors: state.authors, 
  }
};
export default connect(mapStateToProps, null)(AuthorsList);
