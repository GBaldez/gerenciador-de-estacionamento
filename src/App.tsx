import React from 'react';
import './App.css';
import InputField from './components/input/InputField';
import CarsList from './components/tabelCars/CarsList';

const App :React.FC = () => {
  const [car, setCar] = React.useState<string>('');
  const [licensePlate, setLicensePlate] = React.useState<string>('');
  const [cars, setCars] = React.useState<Array<{car: string, license: string, date: Date}>>([]);

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();
    setCars([...cars, {car, license: licensePlate, date: new Date()}]);
    setCar('');
    setLicensePlate('');
  };

  return (
    <div className="App">
      <h1>Parking lot</h1>
      <InputField car={car} setCar={setCar} licensePlate={licensePlate} setLicensePlate={setLicensePlate} handleAdd={handleAdd}/>
      <CarsList cars={cars} setCars={setCars} />
    </div>
  );
}

export default App;
