
import React, { useState } from 'react';
import BestLawyer from '../BestLawyer/BestLawyer';
import IndividualDetails from '../IndividualDetails/IndividualDetails';
import CountUpOnVisible from '../../CountUpOnVisible/CountUpOnVisible';

const Lawyer = ({ data }) => {
    const [showAll, setShowAll] = useState(false);

    const displayedLawyers = showAll ? data : data.slice(0, 6);

    return (
        <div>
            <div className='w-11/12 mx-auto text-center mt-10 mb-10'>
                <h1 className='text-3xl font-bold mb-3'>Our Best Lawyers</h1>
                <p>
                    Our platform connects you with verified, experienced Lawyers across various specialties — all at your convenience.
                </p>
            </div>

            <div className='grid sm:grid-cols-1 lg:grid-cols-2 gap-4 w-11/12 mx-auto'>
                {
                    displayedLawyers.map((bestlawyer) => (
                        <BestLawyer
                            key={bestlawyer.id}
                            bestlawyer={bestlawyer}
                        />
                    ))
                }
            </div>

            {!showAll && (
                <div className='text-center mt-5'>
                    <button
                        onClick={() => setShowAll(true)}
                        className='bg-green-500 rounded-full text-white px-4 py-2 hover:cursor-pointer'
                    >
                        Show All Lawyer
                    </button>
                </div>
            )}
            <div>
                <div className='text-center w-11/12 mx-auto mt-12'>
                    <h1 className='text-3xl font-bold mb-5'>We Provide Best Law Services</h1>
                    <p className='mb-5'>Our platform connects you with verified, experienced Lawyers across various specialities — all at your convenience. </p>

                    <div className='grid sm:grid-cols-2 lg:grid-cols-4 items-center justify-center gap-6'>
                        <div className='bg-gray-100 rounded-lg shadow p-24 lg:p-10'>
                            <img src="assets/success-doctor.png" alt="" />
                            <CountUpOnVisible target={199} />
                            <p className='text-start'>Total Lawyer</p>
                        </div>
                        <div className='bg-gray-100 rounded-lg shadow p-24 lg:p-10'>
                            <img src="assets/success-patients.png" alt="" />
                            <CountUpOnVisible target={2100} />
                            <p className='text-start'>Cases Initiated</p>
                        </div>
                        <div className='bg-gray-100 rounded-lg shadow p-24 lg:p-10'>
                            <img src="assets/success-staffs.png" alt="" />
                            <CountUpOnVisible target={565} />
                            <p className='text-start'>Total Staff</p>
                        </div>
                        <div className='bg-gray-100 rounded-lg shadow p-24 lg:p-10'>
                            <img src="assets/success-review.png" alt="" />
                            <CountUpOnVisible target={345} />
                            <p className='text-start'>Total Reviews</p>
                        </div>
                    </div>
                </div>
            </div>
            
            
        </div>
    );
};

export default Lawyer;
