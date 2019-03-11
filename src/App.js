import React, { Component } from "react";


// Components
import Sidebar from "./Sidebar";
import AuthorsList from "./AuthorsList";
import {connect} from "react-redux";
import * as actionCreators from './store/actions';

class App extends Component {
  render() {
    return (
      <div id="app" className="container-fluid">
        <div className="row">
          <div className="col-2">
            <Sidebar addAuthorHandler={this.props.OnAddAuthor} />
          </div>
          <div className="content col-10">
            <AuthorsList authors={this.props.authors} deleteAuthorHandler={this.props.OnDeleteAuthor}/>
          </div>
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
    OnAddAuthor: () => dispatch(actionCreators.ADD_AUTHOR()),
    OnDeleteAuthor: (author) => dispatch(actionCreators.DELETE_AUTHOR(author))
  }
};
export default connect(mapStateToProps, mapDispatchToProps)(App);
