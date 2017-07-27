import React, { Component } from "react";
import { connect } from "react-redux";
import { Link, BrowserRouter, Route, Switch } from "react-router-dom";
import { fetchPost, updatePost, deletePost } from "../actions";
import PostsEdit from "./posts_edit";

class PostsShow extends Component {

  componentDidMount() {
    const { id } = this.props.match.params;
    this.props.fetchPost(id);
  }

  onDeleteClick() {
    const { id } = this.props.match.params;

    this.props.deletePost(id, () => {
      this.props.history.push("/");
    });
  }

  render() {
    const { post } = this.props;
    const { id } = this.props.match.params;

    if (!post) {
      return <div>Loading...</div>;
    }

    return (
      <div>
        <Link className="btn btn-success" to="/">Back To Index</Link>
        <button
          className="btn btn-danger pull-xs-right"
          onClick={this.onDeleteClick.bind(this)}
        >
          Delete Book
        </button>
        <Link className="btn btn-warning pull-xs-right" to={`/${id}/edit`}>
          Edit Book
        </Link>
        <h3>Title: {post.title}</h3>
        <h6>Author: {post.author}</h6>
        <p>Year Published: {post.year_published}</p>
        <p>Rating: {post.rating}</p>
      </div>
    );
  }
}

function mapStateToProps({ posts }, ownProps) {
  return { post: posts[ownProps.match.params.id] };
}

export default connect(mapStateToProps, { fetchPost, updatePost, deletePost })(PostsShow);
