import { useState } from 'react';
import TripList from './components/TripList';

const App = () => {
  const [showEvents, setShowEvents] = useState(true);
  return (
    <div className="py-3 max-w-4xl px-6 mx-auto">
      <button className="border p-1 bg-gray-50 mb-2 active:bg-gray-100 rounded" onClick={() => setShowEvents(false)}>
        Hide Events
      </button>
      {showEvents && <TripList />}
    </div>
  );
};

export default App;
