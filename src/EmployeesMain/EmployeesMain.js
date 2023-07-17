import React, { useEffect, useState } from 'react';
import"./EmployeesMain.css"
import{ addToDb, getStoredCart } from '../utilities/fakedb'
import Data from '../Component/DataManage/Data';
import EmployeeInfo from '../Component/EmployeeInfo/EmployeeInfo';

const EmployeesMain = () => {
    const[employees, setEmployees] = useState([]);
    const[employeeInfo, setEmployeesInfo] = useState([])
    useEffect(() =>{
        fetch("employeeData.JSON")
        .then(res => res.json())
        .then(data => setEmployees(data))
    },[]);
    
    useEffect(() => {
        const storedCard = getStoredCart();
        for(const id in storedCard){
            const selectedEmployee = employees.find(employee => employee.id === id);
            if (selectedEmployee){
              
            }
        }
    }, [employees]);

    const handelButton=(employee) =>{
        console.log("Clicked");
        const loadNewData =[...employeeInfo, employee];
        setEmployeesInfo(loadNewData);
        addToDb(employee.id)
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
                employees.map(employee => <Data key={employee.id} employee={employee} handelButton={handelButton}></Data>)
            }
            </div>

<div className="selectedEmployee">
    <h2>Selected Employee</h2>
    <h3>Selected : {employeeInfo.length} </h3>
    <h3>Total Salary:{total}</h3>
    {
        employeeInfo.map(employeeDetails => <EmployeeInfo key={employeeDetails.id} employeeDetails={employeeDetails} > </EmployeeInfo>)
    }
           
</div>
</div>
);
};


export default EmployeesMain;