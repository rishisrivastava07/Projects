import React from "react";
import { useState } from "react";
import data from "./data.js";
import Tours from "./components/Tours.js";

const App = () => {
  // Phle data niklo jispr kaam krna hai
  const [tours, setTours] = useState(data);

  // Not interested handler from child component
  function removeTour(id) {
    const newTours = tours.filter((tour) => tour.id !== id);
    setTours(newTours);
  }

  if (tours.length === 0) {
    return (
      <div className="refresh">
        <h4>No Tour Left</h4>
        <button
          className="btn-white"
          onClick={() => {
            setTours(data);
          }}
        >
          Refresh
        </button>
      </div>
    );
  }
  return (
    <div className="App">
      {/* Pass the tours as a props to its children */}
      <Tours tours={tours} removeTour={removeTour}></Tours>
    </div>
  );
};

export default App;
