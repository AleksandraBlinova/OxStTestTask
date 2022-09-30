import React, { useState } from "react";
import "./CarLeasingCalc.css";

import TextFieldOfCarLeasCals from "./TextFieldOfCarLeasCals/TextFieldOfCarLeasCals";
import ResultsParametrsOfLeasCalc from "./ResultsParametrsOfLeasCalc/ResultsParametrsOfLeasCalc";

const CarLeasingCalc = () => {
  const [calcParametrs, setCalcParametrs] = useState([
    {
      id: 1,
      name: "Стоимость автомобиля",
      value: 3300000,
      extraInfo: "₽",
    },
    { id: 2, name: "Первоначальный взнос", value: 420000 },
    { id: 3, name: "Срок лизинга", value: 60, extraInfo: "мес." },
  ]);

  const [calcResultsParametrs, setCalcResultsParametrs] = useState([
    { id: 1, name: "Сумма договора лизинга", value: 4467313, money: "₽" },
    { id: 2, name: "Ежемесячный платеж от", value: 114455, money: "₽" },
  ]);

  return (
    <>
      <div className="calc-header">
        <h1 className="calc-header-h1">
          Рассчитайте стоимость автомобиля в лизинг
        </h1>
      </div>
      <div className="calc-body-counted-parametrs">
        <TextFieldOfCarLeasCals calcParametrs={calcParametrs} />
      </div>
      <div className="calc-body-resulted-parametrs">
        <ResultsParametrsOfLeasCalc
          calcResultsParametrs={calcResultsParametrs}
        />
      </div>
    </>
  );
};

export default CarLeasingCalc;
