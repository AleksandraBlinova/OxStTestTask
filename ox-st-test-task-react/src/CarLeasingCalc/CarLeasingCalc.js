import React, { useState } from "react";
import "./CarLeasingCalc.css";

import TextFieldOfCarLeasCals from "./TextFieldOfCarLeasCals/TextFieldOfCarLeasCals";

const CarLeasingCalc = () => {
  const [calcParametrs, setCalcParametrs] = useState([
    {
      id: 1,
      name: "Стоимость автомобиля",
      value: 3300000,
    },
    { id: 2, name: "Первоначальный взнос", value: 420000 },
    { id: 3, name: "Срок лизинга", value: 60 },
  ]);

  return (
    <>
      <div className="calc-header">
        <h1 className="calc-header-h1">
          Рассчитайте стоимость автомобиля в лизинг
        </h1>
      </div>
      <div className="calc-body">
        <TextFieldOfCarLeasCals calcParametrs={calcParametrs} />
      </div>
    </>
  );
};

export default CarLeasingCalc;
