import _ from "lodash";
import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { fetchPost } from "../actions";
import SearchBar from '../containers/search_bar';

class PostsIndex extends Component {
  componentDidMount() {
    this.props.fetchPost();
  }

  renderPosts() {
    return _.map(this.props.posts, post => {
      return (
        <li className="list-group-item" key={post.id}>
          <Link to={`/${post.id}`}>
            {post.id}: {post.title}
          </Link>
        </li>
      );
    });
  }

  render() {
    return (
      <div>
        <Link className="btn btn-primary text-xs-right" to="/new">
          Add a Book
        </Link>
        <SearchBar />
        <h3>Search Result</h3>
        <ul className="list-group">
          {this.renderPosts()}
        </ul>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { posts: state.posts };
}

export default connect(mapStateToProps, { fetchPost })(PostsIndex);
