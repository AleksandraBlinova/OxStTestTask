import React, { useState } from "react";
import "./TextFieldOfCarLeasCals.css";
import { CustomInput } from "./CustomInput/CustomInputComponent";
import { CustomSliderComponent } from "./CustomSlider/CustomSliderComponent";

const TextFieldOfCarLeasCals = (props) => {
  return (
    <div className="text-fields">
      {props.calcParametrs.map((calcParametr) => (
        <div className="text-field" key={calcParametr.id}>
          <p className="text-field-p-text">{calcParametr.name}</p>
        </div>
      ))}
      <CustomInput
        value={props.valueCost + " ".repeat(33) + "₽"}
        onChange={props.handleChangeCostKeyboard}
      />{" "}
      <CustomInput
        value={
          props.valueInitalPaymMoney +
          " ".repeat(27) +
          props.valueInitalPaymPer +
          "%"
        }
        disabled
      ></CustomInput>
      <CustomInput
        value={props.valueLeasTerm + " ".repeat(40) + "мес."}
      ></CustomInput>
      <CustomSliderComponent
        value={props.valueCost}
        onChange={props.handleChangeCost}
        min={1000000}
        max={6000000}
        step={100000}
      />
      <CustomSliderComponent
        value={props.valueInitalPaymPer}
        onChange={props.handleChangeInitalPaymPer}
        min={10}
        max={60}
        step={0.1}
      />
      <CustomSliderComponent
        value={props.valueLeasTerm}
        onChange={props.handleChangeLeasTerm}
        min={1}
        max={60}
        step={1}
      />
    </div>
  );
};

export default TextFieldOfCarLeasCals;
