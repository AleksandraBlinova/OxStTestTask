import React from "react";
import "./TextFieldOfCarLeasCals.css";
import { CustomInput } from "./CustomInput/CustomInputComponent";

const TextFieldOfCarLeasCals = (props) => {
  console.log(props.calcParametrs);
  return (
    <div className="text-fields">
      {props.calcParametrs.map((calcParametr) => (
        <div className="text-field" key={calcParametr.id}>
          <p className="text-field-p-text">{calcParametr.name}</p>
          <CustomInput value={calcParametr.value} />
        </div>
      ))}
    </div>
  );
};

export default TextFieldOfCarLeasCals;
