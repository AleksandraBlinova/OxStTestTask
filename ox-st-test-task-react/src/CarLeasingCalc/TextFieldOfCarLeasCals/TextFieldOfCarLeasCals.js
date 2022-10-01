import React, { useState } from "react";
import "./TextFieldOfCarLeasCals.css";
import { CustomInput } from "./CustomInput/CustomInputComponent";
import { CustomSliderComponent } from "./CustomSlider/CustomSliderComponent";

import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";

const TextFieldOfCarLeasCals = (props) => {
  return (
    <div className="text-fields">
      {props.calcParametrs.map((calcParametr) => (
        <div className="text-field" key={calcParametr.id}>
          <p className="text-field-p-text">{calcParametr.name}</p>
        </div>
      ))}
      <FormControl
        sx={{
          backgroundColor: "#F3F3F4",
          borderRadius: 16,
          width: 403,
          height: 59,
        }}
      >
        {" "}
        <CustomInput
          value={props.valueCost}
          onChange={props.handleChangeCostKeyboard}
          endAdornment={
            <InputAdornment position="end">
              <p className="input-units-of-measure">₽</p>
            </InputAdornment>
          }
        />
      </FormControl>

      <FormControl
        sx={{
          backgroundColor: "#F3F3F4",
          borderRadius: 16,
          width: 403,
          height: 59,
        }}
      >
        {" "}
        <CustomInput
          value={props.valueInitalPaymMoney}
          disabled
          endAdornment={
            <InputAdornment position="end">
              <p className="input-units-of-measure">
                {props.valueInitalPaymPer}%
              </p>
            </InputAdornment>
          }
        />
      </FormControl>
      <FormControl
        sx={{
          backgroundColor: "#F3F3F4",
          borderRadius: 16,
          width: 403,
          height: 59,
        }}
      >
        {" "}
        <CustomInput
          value={props.valueLeasTerm}
          endAdornment={
            <InputAdornment position="end">
              <p className="input-units-of-measure">мес.</p>
            </InputAdornment>
          }
        />
      </FormControl>
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
        onClick={props.handleChangeLoading}
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
