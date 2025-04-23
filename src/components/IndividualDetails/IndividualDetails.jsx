
import React from 'react';
import { MdWarningAmber } from 'react-icons/md';
import { useLoaderData, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const IndividualDetails = () => {
    const bestlawyer = useLoaderData();
    const navigate = useNavigate();

    const handleBookingClick = () => {
        const existingBookings = JSON.parse(localStorage.getItem('bookedLawyers')) || [];

        const isAlreadyBooked = existingBookings.some(lawyer => lawyer.id === bestlawyer.id);
        if (isAlreadyBooked) {
            toast.warn('This lawyer is already booked!');
            return;
        }

        const updatedBookings = [...existingBookings, bestlawyer];
        localStorage.setItem('bookedLawyers', JSON.stringify(updatedBookings));
        toast.success('Appointment booked successfully!');

        setTimeout(() => {
            navigate('/bookingDetails');
        }, 1000); 
    };

    return (
        <div className='w-11/12 mx-auto'>
            <div className='bg-gray-100 rounded-lg px-5 lg:px-42 py-5 text-center shadow-lg mt-5 mb-5'>
                <h1 className='text-3xl font-bold mb-3'>Lawyer’s Profile Details</h1>
                <p>
                    Experience: {bestlawyer.experience} years in corporate law and dispute resolution
                    Practice Areas: Business law, contract negotiations, intellectual property, litigation
                    Qualifications: LL.B from University of Dhaka, LL.M in International Business Law
                    Achievements: Successfully handled high-profile corporate mergers, recognized as a top legal strategist in Bangladesh <br />
                    Available day:
                    {
                        <ul className="list-disc list-inside">
                            {bestlawyer.availability?.map((slot, index) => (
                                <li key={index}>{slot}</li>
                            ))}
                        </ul>
                    }
                </p>
            </div>

            <div className="card card-side bg-base-100 shadow-lg mb-5">
                <figure className='p-4'>
                    <img
                        style={{ width: '150px', height: '150px', objectFit: 'cover', borderRadius: '20px' }}
                        src={bestlawyer.image}
                        alt={bestlawyer.name}
                    />
                </figure>
                <div className="card-body">
                    <div className='flex items-center gap-3'>
                        <div className='bg-blue-200 text-blue-500 rounded-3xl py-1 px-2'>
                            <h1>{bestlawyer.experience}+ Years Experience</h1>
                        </div>
                    </div>
                    <div>
                        <h1 className='text-2xl font-bold text-start'>{bestlawyer.name}</h1>
                    </div>
                    <div className='flex items-center gap-3'>
                        <div>
                            <h1>{bestlawyer.criminal_expert ? 'Criminal Expert' : ''}</h1>
                        </div>
                        <div>
                            <h1>License No: {bestlawyer.licence_number}</h1>
                        </div>
                    </div>
                    <div className='lg:flex items-center gap-3'>
                        Availability:
                        <div className="sm:flex-row lg:flex gap-3">
                            {bestlawyer.availability?.map((slot, index) => (
                                <ul className='bg-yellow-50 text-yellow-500 border-2 border-amber-600 px-3 py-1 rounded-3xl' key={index}>
                                    {slot}
                                </ul>
                            ))}
                        </div>
                    </div>
                    <div>
                        <p>
                            Consultation Fee:
                            <span className='text-green-500 font-bold'> Taka: {bestlawyer.consultation_fee}</span>
                        </p>
                    </div>
                </div>
            </div>

            <div className='text-center shadow-lg px-12 py-8'>
                <h1 className='text-2xl font-bold mb-6'>Book an Appointment</h1>
                <div className='flex justify-between'>
                    <div>
                        <p className='font-bold'>Availability</p>
                    </div>
                    <div>
                        <ul className='bg-green-200 text-green-500 px-3 py-1 rounded-3xl'>
                            {new Date().toLocaleDateString('en-US', { weekday: 'long' }) in bestlawyer.availability
                                ? 'Lawyer Available Today'
                                : 'Lawyer Not Available Today'}
                        </ul>
                    </div>
                </div>

                <div
                    className='mb-6'
                    style={{
                        marginTop: '15px',
                        backgroundColor: '#fff8e1',
                        color: '#ff5722',
                        padding: '12px 16px',
                        borderRadius: '6px',
                        display: 'flex',
                        alignItems: 'center',
                        fontWeight: '300'
                    }}
                >
                    <MdWarningAmber style={{ marginRight: '10px', fontSize: '28px' }} />
                    <span>
                        Due to high patient volume, we are currently accepting appointments for today only.
                        We appreciate your understanding and cooperation.
                    </span>
                </div>

                <div>
                    <button
                        onClick={handleBookingClick}
                        className='bg-green-500 px-6 lg:px-96 py-2 rounded-3xl text-white font-bold hover:cursor-pointer'
                    >
                        Book Appointment Now
                    </button>
                </div>
            </div>
        </div>
    );
};

export default IndividualDetails;
