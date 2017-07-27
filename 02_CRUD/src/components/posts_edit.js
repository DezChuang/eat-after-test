import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { fetchPost, updatePost } from "../actions";

class PostsEdit extends Component {

  componentDidMount() {
    const { id } = this.props.match.params;
    this.props.fetchPost(id);
  }

  renderField(field) {
    const { meta: { touched, error } } = field;
    const className = `form-group ${touched && error ? "has-danger" : ""}`;

    return (
      <div className={className}>
        <label>{field.label}</label>
        <input className="form-control" type="text" {...field.input} />
        <div className="text-help">
          {touched ? error : ""}
        </div>
      </div>
    );
  }

  onSubmit(values) {
    this.props.updatePost(id, values, () => {
      this.props.history.push("/");
    });
  }

  render() {
    const { post } = this.props;
    const { handleSubmit } = this.props;
    const { id } = this.props.match.params;
    console.log(post);

    if (!post) {
      return <div>Loading...</div>;
    }

    return (
      <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
        <Field
          label="Title"
          name="title"
          value={post.title}
          component={this.renderField}
        />
        <Field
          label="Author"
          name="author"
          value={post.author}
          component={this.renderField}
        />
        <Field
          label="Year Published"
          name="year_published"
          value={post.year_published}
          component={this.renderField}
        />
        <Field
          label="Rating"
          name="rating"
          value={post.rating}
          component={this.renderField}
        />
        <button type="submit" className="btn btn-primary">Submit</button>
        <Link to={`/${id}`} className="btn btn-danger">Cancel</Link>
      </form>
    );
  }
}

function validate(values) {
  // console.log(values) -> { title: 'asdf', categories: 'asdf', content: 'asdf' }
  const errors = {};

  // Validate the inputs from 'values'
  if (!values.title) {
    errors.title = "Enter a title";
  }
  if (!values.author) {
    errors.author = "Enter an author";
  }
  if (!values.year_published) {
    errors.year_published = "Enter year this book published";
  }
  if (!values.rating) {
    errors.rating = "Enter rating about this book";
  }

  // If errors is empty, the form is fine to submit
  // If errors has *any* properties, redux form assumes form is invalid
  return errors;
}

function mapStateToProps({ posts }, ownProps) {
  return { post: posts[ownProps.match.params.id] };
}

export default reduxForm({
  validate,
  form: "PostsNewForm"
})(connect(mapStateToProps, { fetchPost, updatePost })(PostsEdit));
