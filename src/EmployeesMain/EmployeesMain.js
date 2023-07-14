import React, { useEffect, useState } from 'react';
import"./EmployeesMain.css"
import Data from '../Component/DataManage/Data';

const EmployeesMain = () => {
    const[employees, setEmployees] = useState([]);
    const[employeeInfo, setEmployeesInfo] = useState([])
    useEffect(() =>{
        fetch("employeeData.JSON")
        .then(res => res.json())
        .then(data => setEmployees(data))
    },[]);

    const handelButton=(employee) =>{
        console.log("Clicked");
        const loadNewData =[...employeeInfo, employee];
        setEmployeesInfo(loadNewData);
    }

    // salary Count
    let total = 0;
    for(const salary of employeeInfo){
        total = total + salary.salary
    }
    return (
        <div className='Component'>
     
            <div className='employeeCard'>
            {
                employees.map(employee => <Data employee={employee} handelButton={handelButton}></Data>)
            }
            </div>

<div className="selectedEmployee">
    <h2>Selected Employee</h2>
    <div><h1>Total Salary:{total}</h1></div>
{employeeInfo.map(employee => (
  <div className="card" key={employee.id}>
    <img src={employee.img}/>
    <div className="name">Name: {employee.name}</div>
    <div className="salary">Salary: {employee.salary}</div>
    <div className="position">Position: {employee.position}</div>
  </div>
))}
</div>
</div>
);
};


export default EmployeesMain;