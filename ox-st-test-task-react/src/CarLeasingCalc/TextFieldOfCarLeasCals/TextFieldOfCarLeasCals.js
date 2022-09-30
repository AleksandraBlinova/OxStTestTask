import React, { useState } from "react";
import "./TextFieldOfCarLeasCals.css";
import { CustomInput } from "./CustomInput/CustomInputComponent";
import { CustomSliderComponent } from "./CustomSlider/CustomSliderComponent";

const TextFieldOfCarLeasCals = (props) => {
  const [valueCost, setValueCost] = useState(3300000);

  const handleChangeCost = (event, newValue) => {
    setValueCost(newValue);
    console.log(newValue);
  };

  const [valueInitalPaym, setValueInitalPaym] = useState(12.7);

  const handleChangeInitalPaym = (event, newValue) => {
    setValueInitalPaym(newValue);
    console.log(newValue);
  };

  const [valueLeasTerm, setValueLeasTerm] = useState(60);

  const handleChangeLeasTerm = (event, newValue) => {
    setValueLeasTerm(newValue);
    console.log(newValue);
  };

  return (
    <div className="text-fields">
      {props.calcParametrs.map((calcParametr) => (
        <div className="text-field" key={calcParametr.id}>
          <p className="text-field-p-text">{calcParametr.name}</p>
        </div>
      ))}
      <CustomInput value={valueCost} />
      <CustomInput value={valueInitalPaym} />
      <CustomInput value={valueLeasTerm} />
      <CustomSliderComponent
        value={valueCost}
        onChange={handleChangeCost}
        min={1000000}
        max={6000000}
        step={100000}
        valueLabelDisplay="on"
      />
      <CustomSliderComponent
        value={valueInitalPaym}
        onChange={handleChangeInitalPaym}
        min={10}
        max={60}
        step={0.1}
        valueLabelDisplay="on"
      />
      <CustomSliderComponent
        value={valueLeasTerm}
        valueLabelDisplay="on"
        onChange={handleChangeLeasTerm}
        min={1}
        max={60}
        step={1}
      />
    </div>
  );
};

export default TextFieldOfCarLeasCals;
