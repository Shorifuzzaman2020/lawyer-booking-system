
import React, { useState } from 'react';
import BestLawyer from '../BestLawyer/BestLawyer';

const Lawyer = ({ data }) => {
    const [showAll, setShowAll] = useState(false);

    const displayedLawyers = showAll ? data : data.slice(0, 6);

    return (
        <div>
            <div className='w-11/12 mx-auto text-center mt-10 mb-10'>
                <h1 className='text-3xl font-bold mb-3'>Our Best Lawyers</h1>
                <p>
                    Our platform connects you with verified, experienced Lawyers across various specialties — all at your convenience. 
                    Whether it's a routine <br /> checkup or urgent consultation, book appointments in minutes and receive quality care you can trust.
                </p>
            </div>

            <div className='grid grid-cols-2 gap-4 w-11/12 mx-auto'>
                {
                    displayedLawyers.map((bestlawyer) => (
                        <BestLawyer key={bestlawyer.id} bestlawyer={bestlawyer} />
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
        </div>
    );
};

export default Lawyer;
