import React from 'react';

const Overview = (props) =>{
    const {first, last, title, address, phone, email, description} = props;

    return (
        <div className='personal-info'>
            <h4>First Name:</h4>
            <p id='firstname'>{first}</p>
            <h4>Last Name:</h4>
            <p id='lastname'>{last}</p>
            <h4>Title:</h4>
            <p id='title'>{title}</p>
            <h4>Address:</h4>
            <p id='address'>{address}</p>
            <h4>Phone:</h4>
            <p id='phone'>{phone}</p>
            <h4>Email:</h4>
            <p id='email'>{email}</p>
            <h4>description</h4>
            <p id='description'>{description}</p>
        </div>
    )
}

export default Overview;