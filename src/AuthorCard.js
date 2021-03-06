import React, { Component } from "react";
import {connect} from "react-redux";
import * as actionCreators from './store/actions';

class AuthorCard extends Component {
  render() {
    const author = this.props.author;
    const authorName = `${author.first_name} ${author.last_name}`;
    return (
      <div className="col-lg-4 col-md-6 col-12">
        <div className="card">
          <div className="image">
            <img
              className="card-img-top img-fluid"
              src={author.imageUrl}
              alt={authorName}
            />
          </div>
          <div className="card-body">
            <h5 className="card-title">
              <span>{authorName}</span>
            </h5>
            <small className="card-text">{author.books.length} books</small>
          </div>
          <button className="btn btn-danger" onClick={()=>this.props.OnDeleteAuthor(author)}> DELETE</button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    authors: state.authors,
    newAuthorId: state.newAuthorId
  }
};
const mapDispatchToProps = dispatch => {
  return {
    OnDeleteAuthor: (author) => dispatch(actionCreators.DELETE_AUTHOR(author))
  }
};
export default connect(mapStateToProps, mapDispatchToProps)(AuthorCard);
