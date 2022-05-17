import React from "react";
import './CarsList.css'

interface Car {
  car: string;
  license: string;
  date: Date;
}

interface props {
    cars: Array<Car>;
    setCars: React.Dispatch<React.SetStateAction<Array<Car>>>;
}

const CarsList: React.FC<props> = ({
  cars,
  setCars,
}) => {
  const handleDelete = (license: string) => {
    setCars(cars.filter((car) => car.license !== license ));
  };
 
  return (
    <table>
        <thead>
            <tr>
                <th>Car</th>
                <th>License Plate</th>
                <th>Entrance</th>
                <th>Actions</th>
            </tr>
        </thead>
        <tbody>
            {cars?.map((car) => (
                <tr key={car.license}>
                    <td>{car.car}</td>
                    <td>{car.license}</td>
                    <td>{car.date.toUTCString()}</td>
                    <td>  <button onClick={() => handleDelete(car.license)}>Remover</button></td>
                </tr>
            ))}
        </tbody>
    </table>
  );
};

export default CarsList;