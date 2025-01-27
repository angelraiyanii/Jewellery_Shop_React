import React from 'react';
function Person(props) {
  return (
    <>
      <h1>Full name: { props.personData.firstName +" "+props.personData.lastName }</h1>;
      <h2>Designation: { props.personJobData.designation}</h2>;
      <h3>Experience: {props.personJobData.experience}</h3>
    </>
  );
}

export default Person