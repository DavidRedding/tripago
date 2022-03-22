import axios from 'axios';

const TripList = () => {
  axios(' http://localhost:3000/trips')
    .then((res) => res.data)
    .then((json) => console.log(json));
  return (
    <div>
      <h2>TripList</h2>
    </div>
  );
};

export default TripList;
