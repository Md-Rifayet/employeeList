import React from 'react';
import"./Data.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleCheck, faEnvelope, faShoppingBasket } from '@fortawesome/free-solid-svg-icons'
import { faCircle } from '@fortawesome/free-regular-svg-icons';

const Data = (props) => {
    const {img, name, salary, age, position, workingProject}= props.employee;
    const {handelButton, employee} = props;

    const element = <FontAwesomeIcon icon={faCircleCheck} />
    return (
        <div className='dataLoadCard'>
             <img src={img} alt="" />
            <div className='employeeInfo'>
            <h2>Name: {name}</h2>
            <h4>Age: {age}</h4>
            <h3>Position: {position}</h3>
            <h3>Salary: {salary}</h3>
            <h3>Now Working: {workingProject}</h3>
            <button onClick={()=>{handelButton(employee)}}>{element} Selected</button>
            </div>
        </div>
    );
};

export default Data;