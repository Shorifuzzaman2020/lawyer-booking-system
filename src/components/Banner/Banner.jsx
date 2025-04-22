import React from 'react';

const Banner = () => {
    return (
        <div className="bg-[url('assets/banner-img-1.png')] w-11/12 mx-auto p-50 rounded-lg">
            <h1 className='text-3xl font-bold text-white text-center mb-5'>It avoids subjective claims or <br /> exaggeration that might raise red <br /> flags legally</h1>
            <p className='text-center text-white'>Our platform connects you with verified, experienced doctors across various specialties — all at your convenience. Whether it's a <br /> routine checkup or urgent consultation, book appointments in minutes and receive quality care you can trust.</p>
        </div>
    );
};

export default Banner;