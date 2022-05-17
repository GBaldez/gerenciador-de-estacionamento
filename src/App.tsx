import React, { useEffect, useState } from 'react';
import './App.css';
import InputField from './components/input/InputField';
import CarsList from './components/tabelCars/CarsList';

const App :React.FC = () => {
  const [car, setCar] = React.useState<string>('');
  const [licensePlate, setLicensePlate] = React.useState<string>('');
  const [cars, setCars] = React.useState<Array<{car: string, license: string, date: Date}>>([]);

  const useStorageLocal = (key: string, initialValue: any) => {
    const [storedValue, setStoredValue] = useState(() => {
      const storedData = localStorage.getItem(key);
      return storedData ? JSON.parse(storedData) : initialValue;
    });
    
    useEffect(() => {
      try {
        window.localStorage.setItem(key, JSON.stringify(storedValue));
      } catch (error) {
        console.log(error);
      }
    }
    , [key, storedValue]);

    return [storedValue, setStoredValue];

  }

  const [storedCars, setStoredCars] = useStorageLocal('cars', []);

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();
    setCars([...cars, {car, license: licensePlate, date: new Date()}]);
    setCar('');
    setLicensePlate('');
    setStoredCars([...storedCars, {car, license: licensePlate, date: new Date()}]);
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
