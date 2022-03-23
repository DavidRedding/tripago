import axios from 'axios';
import { useCallback } from 'react';
import { useState, useEffect } from 'react';

const TripList = () => {
  const [trips, setTrips] = useState([]);
  const [url, setUrl] = useState(' http://localhost:3000/trips');

  const getTrips = useCallback(async () => {
    const res = await axios(url);
    setTrips(res.data);
  }, [url]);

  useEffect(() => getTrips(), [getTrips]);

  const list = trips.map((trip) => (
    <li key={trip.id} className=" border border-slate-100 mb-6 px-2 py-6 shadow rounded hover:bg-slate-100">
      <h3 className="font-bold text-lg mb-2">{trip.title}</h3>
      <h3>{trip.price}</h3>
    </li>
  ));

  return (
    <div>
      <h2 className=" font-bold text-2xl mb-3">Trip List</h2>
      <ul>{trips && list}</ul>
      <div className="flex justify-center w-full space-x-2">
        <button
          className="border-2 py-3 px-8 bg-gray-100 hover:bg-gray-50 active:bg-gray-300 w-1/2 rounded"
          onClick={() => setUrl('http://localhost:3000/trips?loc=europe')}
        >
          European Trips
        </button>
        <button
          className="border-2 py-3 px-8 bg-gray-100 hover:bg-gray-50 active:bg-gray-300 w-1/2 rounded"
          onClick={() => setUrl('http://localhost:3000/trips')}
        >
          All Trips
        </button>
      </div>
    </div>
  );
};

export default TripList;
