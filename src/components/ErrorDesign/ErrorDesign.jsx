import React from 'react';
import { Link } from 'react-router';

const ErrorDesign = () => {
    return (
        <div className='text-center'>
            <div className="flex justify-center">
                <img src="public/assets/errorimage.jpg" alt="Error" />
            </div>

            <h1 className='text-2xl font-bold text-red-500'>404-Page Not Found</h1>
            <p className='mb-4 mt-4'>Oops! The page you're looking for doesn't exist</p>
            <Link to='/'><button className='bg-green-500 text-white p-2 rounded hover:cursor-pointer'>Go Back Home</button></Link>
        </div>
    );
};

export default ErrorDesign;