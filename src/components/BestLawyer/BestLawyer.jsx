import React, { use } from 'react';
import Home from '../pages/Home/Home';
import Lawyer from '../Lawyer/Lawyer';

const BestLawyer = ({bestlawyer}) => {
    console.log(bestlawyer);
    return (
        <div className='mt-8 text-center'>
            

            <div>
                <div className="card card-side bg-base-100 shadow-sm">
                <figure className='p-4'>
                    <img style={{ width: '150px', height: '150px', objectFit: 'cover', border:'20px', borderRadius:'20px' }} 
                    src={bestlawyer.image}
                    alt="Movie" />
                    
                </figure>
                <div className="card-body">
                    <div className='flex items-center gap-3'>
                        <div className='bg-green-200 text-green-500 rounded-3xl py-1 px-2'>
                            <h1>Available</h1>
                        </div>
                        <div className='bg-blue-200 text-blue-500 rounded-3xl py-1 px-2'>
                            <h1>{bestlawyer.experience}+ Years Experience</h1>
                        </div>
                    </div>
                    <div>
                        <h1 className='text-2xl font-bold text-start'>{bestlawyer.name}</h1>
                        <p className='text-start text-xl mt-1 mb-1'>{bestlawyer.criminal_expert===true?'Criminal Expert':''}</p>
                        <p className='text-start'>License No: {bestlawyer.licence_number}</p>
                    </div>
                    <div className="card-actions justify-center">
                    <button className="border-blue-300 border-2 px-32 py-2 text-blue-500 font-bold rounded-3xl">View Details</button>
                    </div>
                </div>
                </div>
            </div>
        </div>
    );
};

export default BestLawyer;