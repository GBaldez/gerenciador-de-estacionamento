import React, { useEffect, useState } from "react";
import { useRef } from "react";

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
            {cars?.map((car) => (
                <tr key={car.license}>
                    <td>{car.car}</td>
                    <td>{car.license}</td>
                    <td>{car.date.toLocaleDateString()}</td>
                    <td>  <button onClick={() => handleDelete(car.license)}>Remover</button></td>
                </tr>
            ))}
        </thead>
    </table>
  );
};

export default CarsList;