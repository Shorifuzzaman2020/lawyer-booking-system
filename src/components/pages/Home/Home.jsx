import React from 'react';
import Banner from '../../Banner/Banner';
import { useLoaderData } from 'react-router';
import Lawyer from '../../Lawyer/Lawyer';


const Home = () => {
    const data=useLoaderData();
    return (
        <div>
            <Banner></Banner>
            <Lawyer data={data}></Lawyer>
        </div>
    );
};

export default Home;
