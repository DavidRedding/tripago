import axios from 'axios';
import { useState } from 'react';

const TripList = () => {
  const [trips, setTrips] = useState([]);

  console.log(trips);

  axios(' http://localhost:3000/trips')
    .then((res) => res.data)
    .then((json) => setTrips(json));

  return (
    <div>
      <h2>TripList</h2>
    </div>
  );
};

export default TripList;
