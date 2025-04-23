
import React from 'react';
import { useLoaderData } from 'react-router-dom';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  ResponsiveContainer,
  Tooltip,
} from 'recharts';

const ConeShape = ({ x, y, width, height, fill }) => {
  const topX = x + width / 2;
  const topY = y;
  const bottomY = y + height;
  const path = `M${topX},${topY} L${x},${bottomY} L${x + width},${bottomY} Z`;
  return <path d={path} fill={fill} />;
};

const gradients = [
  { id: 'gradBlue', from: '#00c6ff', to: '#0072ff' },
  { id: 'gradOrange', from: '#ffb347', to: '#ffcc33' },
  { id: 'gradGreen', from: '#00d084', to: '#28a745' },
  { id: 'gradTeal', from: '#00c9a7', to: '#008080' },
  { id: 'gradRed', from: '#ff6b6b', to: '#c0392b' },
  { id: 'gradPurple', from: '#a18cd1', to: '#fbc2eb' },
];

const IndividualConeChart = ({ data, gradient }) => (
  <div style={{ width: 150, height: 200 }}>
    <ResponsiveContainer>
      <BarChart
        data={data}
        margin={{ top: 5, right: 5, left: 5, bottom: 30 }}
      >
        <defs>
          <linearGradient id={gradient.id} x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor={gradient.from} />
            <stop offset="100%" stopColor={gradient.to} />
          </linearGradient>
        </defs>
        <XAxis
          dataKey="name"
          tick={{ fontSize: 10 }}
          interval={0}
          angle={0}
          textAnchor="middle"
        />
        <YAxis hide />
        <Tooltip />
        <Bar
          dataKey="fee"
          shape={<ConeShape />}
          fill={`url(#${gradient.id})`}
          animationDuration={1000}
        />
      </BarChart>
    </ResponsiveContainer>
  </div>
);

const BookingDetails = () => {
  const bookedLawyers = useLoaderData();

  return (
    <div className="w-11/12 mx-auto mt-5">
      <h1 className="text-3xl font-bold mb-4">My Bookings</h1>

      {/* 🔷 Chart Container with Border */}
      <div className="border-2 border-blue-400 p-4 rounded-md mb-10">
        <div className="flex flex-wrap justify-center gap-6">
          {bookedLawyers.map((lawyer, index) => (
            <IndividualConeChart
              key={lawyer.id}
              data={[{ name: lawyer.name, fee: lawyer.consultation_fee }]}
              gradient={gradients[index % gradients.length]}
            />
          ))}
        </div>
      </div>

      {/* Booking List */}
      {bookedLawyers.length > 0 ? (
        bookedLawyers.map((lawyer) => (
          <div
            key={lawyer.id}
            className="card card-side bg-base-100 shadow-md mb-4"
          >
            <figure className="p-4">
              <img
                src={lawyer.image}
                alt={lawyer.name}
                className="w-36 h-36 object-cover rounded-xl"
              />
            </figure>
            <div className="card-body">
              <h2 className="text-xl font-bold">{lawyer.name}</h2>
              <p>{lawyer.experience}+ Years Experience</p>
              <p>License No: {lawyer.licence_number}</p>
              <p>Fee: ৳{lawyer.consultation_fee}</p>
            </div>
          </div>
        ))
      ) : (
        <p>No bookings found.</p>
      )}
    </div>
  );
};

export default BookingDetails;
