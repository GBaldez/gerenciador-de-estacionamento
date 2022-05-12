import React, { useRef } from "react";
import "./InputField.css";

interface InputFieldProps {
    car: string;
    setCar: React.Dispatch<React.SetStateAction<string>>;

}
const InputField: React.FC<InputFieldProps> = ({ car, setCar }) => {
    const inputRef = useRef<HTMLInputElement>(null);

    return (
        <form
        className="input">
        <input
        type="text"
        placeholder="Informe o nome do carro"
        value={car}
        ref={inputRef}
        onChange={(e) => setCar(e.target.value)}
        className="input__box"
        />
        <button type="submit" className="input__submit">
            OK
        </button>
        </form>
    );
}
export default InputField;