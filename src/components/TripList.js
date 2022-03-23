import axios from 'axios';
import { useState, useEffect } from 'react';

const TripList = () => {
  const [trips, setTrips] = useState([]);

  useEffect(() => {
    axios(' http://localhost:3000/trips')
      .then((res) => res.data)
      .then((json) => setTrips(json));
  }, [trips]);

  const list = trips.map((trip) => (
    <li key={trip.id} className=" border border-slate-100 mb-6 px-2 py-6 shadow rounded">
      <h3 className="font-bold text-lg mb-2">{trip.title}</h3>
      <h3>{trip.price}</h3>
    </li>
  ));

  return (
    <div>
      <h2 className=" font-bold text-2xl mb-3">Trip List</h2>
      <ul>{trips && list}</ul>
    </div>
  );
};

export default TripList;
