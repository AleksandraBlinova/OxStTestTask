import React from "react";
import "./TextFieldOfCarLeasCals.css";
import { CustomInput } from "./CustomInput/CustomInputComponent";
import { CustomSliderComponent } from "./CustomSlider/CustomSliderComponent";

const TextFieldOfCarLeasCals = (props) => {
  return (
    <div className="text-fields">
      {props.calcParametrs.map((calcParametr) => (
        <div className="text-field" key={calcParametr.id}>
          <p className="text-field-p-text">{calcParametr.name}</p>
          <CustomInput value={calcParametr.value} />
          <CustomSliderComponent />
        </div>
      ))}
    </div>
  );
};

export default TextFieldOfCarLeasCals;
