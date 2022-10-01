import React, { useState } from "react";
import "./TextFieldOfCarLeasCals.css";
import { CustomInput } from "./CustomInput/CustomInputComponent";
import { CustomSliderComponent } from "./CustomSlider/CustomSliderComponent";

import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import { Box } from "@mui/system";

const TextFieldOfCarLeasCals = (props) => {
  return (
    <div className="text-fields">
      <div className="text-fields-div-container-for-3-elements">
        <div className="text-field-for-large-screens">
          <p className="text-field-p-text">Стоимость автомобиля</p>
        </div>

        <div className="text-field-for-small-screens">
          <p className="text-field-p-text">Желаемая сумма кредита</p>
        </div>

        <FormControl
          sx={{
            backgroundColor: "#F3F3F4",
            borderRadius: "16px",
            width: "427px",
            height: "68px",
            "@media only screen and (max-width: 1024px)": {
              width: "928px",
            },
            "@media only screen and (max-width: 768px)": {
              width: "696px",
            },
            "@media only screen and (max-width: 320px)": {
              width: "280px",
              height: "60px",
            },
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

        <CustomSliderComponent
          value={props.valueCost}
          onChange={props.handleChangeCost}
          min={1000000}
          max={6000000}
          step={100000}
        />
      </div>

      <div className="text-fields-div-container-for-3-elements">
        <div className="text-field">
          <p className="text-field-p-text">Первоначальный взнос</p>
        </div>

        <FormControl
          sx={{
            backgroundColor: "#F3F3F4",
            borderRadius: "16px",
            width: "427px",
            height: "68px",
            "@media only screen and (max-width: 1024px)": {
              width: "928px",
            },
            "@media only screen and (max-width: 768px)": {
              width: "696px",
            },
            "@media only screen and (max-width: 320px)": {
              width: "280px",
              height: "60px",
            },
          }}
        >
          {" "}
          <CustomInput
            value={props.valueInitalPaymMoney}
            disabled
            endAdornment={
              <InputAdornment
                position="end"
                sx={{
                  backgroundColor: "#EBEBEC",
                  height: 54,
                  maxHeight: 54,
                  borderRadius: "16px",
                  width: 69,
                  maxWidth: 69,
                  marginRight: "10px",
                }}
              >
                <p className="input-units-of-measure-per">
                  {props.valueInitalPaymPer}%
                </p>
              </InputAdornment>
            }
          />
        </FormControl>

        <CustomSliderComponent
          value={props.valueInitalPaymPer}
          onChange={props.handleChangeInitalPaymPer}
          min={10}
          max={60}
          step={0.1}
          onClick={props.handleChangeLoading}
        />
      </div>

      <div className="text-fields-div-container-for-3-elements">
        <div className="text-field">
          <p className="text-field-p-text">Срок лизинга</p>
        </div>

        <FormControl
          sx={{
            backgroundColor: "#F3F3F4",
            borderRadius: "16px",
            width: "427px",
            height: "68px",
            "@media only screen and (max-width: 1024px)": {
              width: "928px",
            },

            "@media only screen and (max-width: 768px)": {
              width: "696px",
            },
            "@media only screen and (max-width: 320px)": {
              width: "280px",
              height: "60px",
            },
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
          value={props.valueLeasTerm}
          onChange={props.handleChangeLeasTerm}
          min={1}
          max={60}
          step={1}
        />
      </div>
    </div>
  );
};

export default TextFieldOfCarLeasCals;
