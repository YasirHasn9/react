import React, { Component } from "react";
import { connect } from "react-redux";
import * as courseActions from "../../redux/actions/courseAction";
import PropTypes from "prop-types";
import { bindActionCreators } from "redux";
// what is bindActionCreators ?
// this s hoc function that takes 2 arguments
// one is the actionsCreator file with all the object that contains all
// the actions that come from the functions
// and the second argument is dispatch
// in this case you dont need to use all the action in file
// bindActionCreators will do it
console.log("********", courseActions.createAction);
class CoursesPage extends Component {
  state = {
    course: {
      title: ""
    }
  };
  handleChange = e => {
    let course = { ...this.state.course, title: e.target.value };
    this.setState({ course });
  };

  handleSubmit = e => {
    e.preventDefault();
    // here were dispatch the action
    this.props.actions.createAction(this.state.course);
  };
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <h2>Course</h2>
        <h3>Add course</h3>
        <input
          type="text"
          value={this.state.course.title}
          onChange={this.handleChange}
        />
        <input type="submit" />
        {this.props.courses.map(course => (
          <div key={course.title}>{course.title}</div>
        ))}
      </form>
    );
  }
}

const mapStateToProps = state => {
  return {
    courses: state.courses
  };
};
const mapDispatchToProps = dispatch => {
  return {
    actions: bindActionCreators(courseActions, dispatch)
  };
};

CoursesPage.propTypes = {
  courses: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CoursesPage);

// class CoursesPage extends Component {
//   //   constructor(props) {
//   //     super(props);

//   //     this.state = {
//   //       course: {
//   //         title: ""
//   //       }
//   //     };
//   //     this.handleChange = this.handleChange.bind(this);
//   //   }
//   state = {
//     course: {
//       title: ""
//     }
//   };
//   //   we can bind this in the input itself like this
//   //  onChange={this.handleChange.bind(this)} but this is cause to call another function
//   //  which is the bind function
//   // but we can bind it in diff way which is the binding constructor
//   // and in this case it will be bound once so it is not gonna allocated on every render
//   // or we can use an arrow function that will auto bind
//   // arrow function help to avoid the bind function

//   handleChange = e => {
//     //   this is is gonna auto bind the function
//     let course = {
//       ...this.state.course,
//       title: e.target.value
//     };
//     this.setState({ course });
//   };

//   handleSubmit = e => {
//     e.preventDefault();
//     this.props.dispatch(courseAction.createCourse(this.state.course));
//   };
//   render() {
//     console.log("this is the props ",this.props.courses);
//     return (
//       <form onSubmit={this.handleSubmit}>
//         <h2>Course</h2>
//         <h3>Add Course</h3>
//         <input
//           type="text"
//           value={this.state.course.title}
//           onChange={this.handleChange}
//         />
//         <input type="submit" value="Save" />
//       </form>
//     );
//   }
// }

// CoursesPage.propTypes = {
//   courses: PropTypes.array.isRequired,
//   dispatch: PropTypes.func.isRequired
// };

// const mapStateToProps = state => {
//   return {
//     courses: state.courses
//   };
// };

// // when we omit the mapDispatchToProps our redux will inject the dispatch
// // to it automatically
// export default connect(mapStateToProps)(CoursesPage);
