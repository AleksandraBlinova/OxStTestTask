import React, { useState } from "react";
import "./ButtonApply.css";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import CircularProgress from "@mui/material/CircularProgress";
import axios from "axios";

const ButtonForApply = styled(Button)(({ theme }) => ({
  color: "#FFF",
  borderRadius: 40,
  boxShadow: "none",
  width: 426,
  height: 58,
  padding: 0,
  backgroundColor: "#FF9514",
  "&:hover": {
    backgroundColor: "#000",
  },
  "&:focus": {
    backgroundColor: "#575757",
  },
  "&:disabled": {
    backgroundColor: "#FF9514",
    opacity: 0.4,
    color: "#FFF",
  },
  "@media only screen and (max-width: 1024px)": {
    width: 345,
    height: 68,
  },
  "@media only screen and (max-width: 320px)": {
    width: 265,
    height: 60,
  },
}));

const ProgressForApply = styled(CircularProgress)(({ theme }) => ({
  color: "#FFF",
}));

const ButtonApply = ({
  loading,
  valueCost,
  valueInitalPaymPer,
  valueInitalPaymMoney,
  valueLeasTerm,
  resultTermpaym,
  resultLeas,
}) => {
  const [ifPressed, setIfPressed] = useState(false);
  const handleChangeIfPressed = () => {
    setIfPressed(true);
  };

  const handleSubmit = () => {
    const values = {
      valueCost: valueCost,
      valueInitalPaymPer: valueInitalPaymPer,
      valueInitalPaymMoney: valueInitalPaymMoney,
      valueLeasTerm: valueLeasTerm,
      resultTermpaym: resultTermpaym,
      resultLeas: resultLeas,
    };

    axios
      .post(
        "https://eoj3r7f3r4ef6v4.m.pipedream.net",
        {
          withCredentials: true,
          headers: {
            "Content-Type": "application/json",
          },
        },
        values
      )
      .then((response) => {
        console.log(response);
      })
      .catch(console.error);
  };

  return (
    <div className="button-apply-container">
      <ButtonForApply
        variant="contained"
        disabled={ifPressed}
        onClick={() => {
          handleChangeIfPressed();
          handleSubmit();
        }}
      >
        {loading ? (
          <ProgressForApply />
        ) : (
          <p className="button-apply-container-text">Оставить заявку</p>
        )}
      </ButtonForApply>
    </div>
  );
};

export default ButtonApply;
