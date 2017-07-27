import _ from "lodash";
import React, { Component } from "react";
import { connect } from "react-redux";

class BookList extends Component {
  renderBook(bookData) {
    console.log(bookData);
    // const name = bookData.city.name;
    // const temps = bookData.list.map(weather => weather.main.temp);
    // const pressures = bookData.list.map(weather => weather.main.pressure);
    // const humidities = bookData.list.map(weather => weather.main.humidity);
    // const { lon, lat } = bookData.city.coord;

    // return (
    //   <tr key={name}>
    //     <td><GoogleMap lon={lon} lat={lat} /></td>
    //     <td><Chart data={temps} color="orange" units="K" /></td>
    //     <td><Chart data={pressures} color="green" units="hPa" /></td>
    //     <td><Chart data={humidities} color="black" units="%" /></td>
    //   </tr>
    // );
  }

  render() {
    return (
      <table className="table table-hover">
        <thead>
          <tr>
            <th>Title</th>
            <th>Author</th>
            <th>Year Published</th>
            <th>Rating</th>
          </tr>
        </thead>
        <tbody>
          {this.props.posts.map(this.renderBook)}
        </tbody>
      </table>
    );
  }
}

function mapStateToProps({ posts }, ownProps) {
  return { post: posts[ownProps.match.params.id] };
}

export default connect(mapStateToProps)(BookList);
