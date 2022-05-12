import React from 'react';
import './App.css';
import InputField from './components/input/InputField';

const App :React.FC = () => {
  const [car, setCar] = React.useState<string>('');

  return (
    <div className="App">
      <h1>Parking lot</h1>
      <InputField car={car} setCar={setCar} />
    </div>
  );
}

export default App;
