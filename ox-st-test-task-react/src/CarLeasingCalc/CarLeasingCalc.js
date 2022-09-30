import React, { useState } from "react";
import "./CarLeasingCalc.css";

import TextFieldOfCarLeasCals from "./TextFieldOfCarLeasCals/TextFieldOfCarLeasCals";
import ResultsParametrsOfLeasCalc from "./ResultsParametrsOfLeasCalc/ResultsParametrsOfLeasCalc";

const CarLeasingCalc = () => {
  const [calcParametrs, setCalcParametrs] = useState([
    {
      id: 1,
      name: "Стоимость автомобиля",

      extraInfo: "₽",
    },
    { id: 2, name: "Первоначальный взнос" },
    { id: 3, name: "Срок лизинга", extraInfo: "мес." },
  ]);

  const [calcResultsParametrs, setCalcResultsParametrs] = useState([
    { id: 1, name: "Сумма договора лизинга" },
    { id: 2, name: "Ежемесячный платеж от" },
  ]);

  const [resultLeas, setResultLeas] = useState(4467313);
  const handleChangeResultLeas = (event, newValue) => {
    setResultLeas(valueInitalPaymMoney + valueLeasTerm * resultTermpaym);
  };

  const [resultTermpaym, setResultTermpaym] = useState(114455);
  const handleChangeResultTermpaym = (event, newValue) => {
    setResultTermpaym(
      (valueCost - valueInitalPaymMoney) *
        ((0.035 * Math.pow(1 + 0.035, valueLeasTerm)) /
          (Math.pow(1 + 0.035, valueLeasTerm) - 1))
    );
  };

  const [valueCost, setValueCost] = useState(3300000);

  const handleChangeCost = (event, newValue) => {
    setValueCost(newValue);
    setValueInitalPaymMoney(Math.round(newValue * (valueInitalPaymPer / 100)));

    setResultTermpaym(
      Math.round(
        (newValue - newValue * (valueInitalPaymPer / 100)) *
          ((0.035 * Math.pow(1 + 0.035, valueLeasTerm)) /
            (Math.pow(1 + 0.035, valueLeasTerm) - 1))
      )
    );

    setResultLeas(
      Math.round(
        newValue * (valueInitalPaymPer / 100) +
          valueLeasTerm *
            ((newValue - newValue * (valueInitalPaymPer / 100)) *
              ((0.035 * Math.pow(1 + 0.035, valueLeasTerm)) /
                (Math.pow(1 + 0.035, valueLeasTerm) - 1)))
      )
    );
  };

  const handleChangeCostKeyboard = (event) => {
    if (event.target.value >= 1000000 && event.target.value <= 6000000) {
      setValueCost(parseInt(event.target.value));
      setValueInitalPaymMoney(
        Math.round(parseInt(event.target.value) * (valueInitalPaymPer / 100))
      );
    }

    if (event.target.value < 1000000) {
      setValueCost(1000000);
      setValueInitalPaymMoney(Math.round(1000000 * (valueInitalPaymPer / 100)));
    }

    if (event.target.value > 6000000) {
      setValueCost(6000000);

      setValueInitalPaymMoney(Math.round(6000000 * (valueInitalPaymPer / 100)));
    }
  };

  const [valueInitalPaymMoney, setValueInitalPaymMoney] = useState(420000);

  const [valueInitalPaymPer, setValueInitalPaymPer] = useState(12.7);

  const handleChangeInitalPaymPer = (event, newValue) => {
    setValueInitalPaymPer(newValue);
    setValueInitalPaymMoney(Math.round(valueCost * (newValue / 100)));

    setResultTermpaym(
      Math.round(
        (valueCost - valueCost * (newValue / 100)) *
          ((0.035 * Math.pow(1 + 0.035, valueLeasTerm)) /
            (Math.pow(1 + 0.035, valueLeasTerm) - 1))
      )
    );

    setResultLeas(
      Math.round(
        valueCost * (newValue / 100) +
          valueLeasTerm *
            (valueCost - valueCost * (newValue / 100)) *
            ((0.035 * Math.pow(1 + 0.035, valueLeasTerm)) /
              (Math.pow(1 + 0.035, valueLeasTerm) - 1))
      )
    );
  };

  const [valueLeasTerm, setValueLeasTerm] = useState(60);

  const handleChangeLeasTerm = (event, newValue) => {
    setValueLeasTerm(newValue);
    setResultTermpaym(
      Math.round(
        (valueCost - valueInitalPaymMoney) *
          ((0.035 * Math.pow(1 + 0.035, newValue)) /
            (Math.pow(1 + 0.035, newValue) - 1))
      )
    );

    setResultLeas(
      Math.round(
        valueInitalPaymMoney +
          newValue *
            ((valueCost - valueInitalPaymMoney) *
              ((0.035 * Math.pow(1 + 0.035, newValue)) /
                (Math.pow(1 + 0.035, newValue) - 1)))
      )
    );
  };

  return (
    <>
      <div className="calc-header">
        <h1 className="calc-header-h1">
          Рассчитайте стоимость автомобиля в лизинг
        </h1>
      </div>
      <div className="calc-body-counted-parametrs">
        <TextFieldOfCarLeasCals
          calcParametrs={calcParametrs}
          valueInitalPaymMoney={valueInitalPaymMoney}
          valueCost={valueCost}
          handleChangeCost={handleChangeCost}
          valueInitalPaymPer={valueInitalPaymPer}
          handleChangeInitalPaymPer={handleChangeInitalPaymPer}
          valueLeasTerm={valueLeasTerm}
          handleChangeLeasTerm={handleChangeLeasTerm}
          handleChangeCostKeyboard={handleChangeCostKeyboard}
        />
      </div>
      <div className="calc-body-resulted-parametrs">
        <ResultsParametrsOfLeasCalc
          calcResultsParametrs={calcResultsParametrs}
          resultTermpaym={resultTermpaym}
          resultLeas={resultLeas}
          handleChangeResultTermpaym={handleChangeResultTermpaym}
          handleChangeResultLeas={handleChangeResultLeas}
        />
      </div>
    </>
  );
};

export default CarLeasingCalc;
