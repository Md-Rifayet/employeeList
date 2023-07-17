import React from 'react';

const EmployeeInfo = (props) => {
    const {img, name, salary, age, position, workingProject}= props.employeeDetails;
    return (
<div>
   
  <div className="card">
    <img src={img}/>
    <div className="name">Name: {name}</div>
    <div className="salary">Salary: {salary}</div>
    <div className="position">Position: {position}</div>
  </div>

</div>
    );
};

export default EmployeeInfo;