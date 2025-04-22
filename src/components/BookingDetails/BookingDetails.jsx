import React from 'react';
import { useLoaderData } from 'react-router';

const BookingDetails = () => {
    const data=useLoaderData();
    console.log(data);
    return (
        <div>
            <h1>I am booking page</h1>
        </div>
    );
};

export default BookingDetails;