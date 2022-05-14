import React, { useRef } from "react";
import "./InputField.css";

interface InputFieldProps {
    car: string;
    setCar: React.Dispatch<React.SetStateAction<string>>;
    licensePlate: string;
    setLicensePlate: React.Dispatch<React.SetStateAction<string>>;
    handleAdd: (e: React.FormEvent) => void;

}
const InputField: React.FC<InputFieldProps> = ({ car, setCar, licensePlate, setLicensePlate, handleAdd }) => {
    const inputRef = useRef<HTMLInputElement>(null);

    return (
        <form
        className="input"
        onSubmit={(e) => {
            handleAdd(e);
            inputRef.current?.blur();
        }}>
        <input
        type="text"
        placeholder="Informe o nome do carro"
        value={car}
        ref={inputRef}
        onChange={(e) => setCar(e.target.value)}
        className="input__box"
        />
        <input
        type="text"
        placeholder="Informe a placa do carro"
        value={licensePlate}
        ref={inputRef}
        onChange={(e) => setLicensePlate(e.target.value)}
        className="input__box"
        />
        <button type="submit" className="input__submit">
            OK
        </button>
        </form>
    );
}
export default InputField;