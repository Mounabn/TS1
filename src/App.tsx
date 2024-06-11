
import React, { useState } from 'react';
import { Car } from './Car';

const App: React.FC = () => {
  const [car] = useState(new Car("Mercedes", "benz", 20222));

  return (
    <div>
      <h1>Car Information</h1>
      <p>Make: {car.make}</p>
      <p>Model: {car.model}</p>
      <p>Year: {car.year}</p>
      <button onClick={() => car.start()}>Start Car</button>
    </div>
  );
};

export default App;