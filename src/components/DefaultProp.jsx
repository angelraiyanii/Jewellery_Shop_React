import React, { Component } from 'react';
  
class PersonDefaultDemo extends Component {
  render() {
    return (
      <div>
        <p>Name: {this.props.name} </p>
        <p>Gender: {this.props.gender}</p>
        <p>Designation: {this.props.designation}</p>
        <hr/>
      </div>
    )
  }
}

PersonDefaultDemo.defaultProps = {
  name: "ABC XYZ",
  gender:"Male",
  designation:"Director",
}
  
export default PersonDefaultDemo;