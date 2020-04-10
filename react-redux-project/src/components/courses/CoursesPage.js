import React, { Component } from "react";

class CoursesPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      course: {
        title: ""
      }
    };
    this.handleChange = this.handleChange.bind(this);
  }
//   we can bind this in the input itself like this 
//  onChange={this.handleChange.bind(this)} but this is cause to call another function
//  which is the bind function 
// but we can bind it in diff way which is the binding constructor 
// and in this case it will be bound once so it is not gonna allocated on every render 


  handleChange(e) {
    let course = {
      ...this.state.course,
      title: e.target.value
    };
    this.setState({ course });
  }
  render() {
    return (
      <form>
        <h2>Course</h2>
        <h3>Add Course</h3>
        <input
          type="text"
          value={this.state.course.title}
          onChange={this.handleChange}
        />
        <input type="text" value="Save" />
      </form>
    );
  }
}

export default CoursesPage;
