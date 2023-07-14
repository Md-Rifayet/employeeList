import React from 'react';

const infoCard = (props) => {
    const {img, name, salary, age, position, workingProject}= props.employee;
    return (
        <div>
            Name: {name}
        </div>
    );
};

export default infoCard;