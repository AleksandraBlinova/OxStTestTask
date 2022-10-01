import React from "react";
import "./ResultsParametrsOfLeasCalc.css";
import ButtonApply from "./ButtonApply/ButtonApply";

const ResultsParametrsOfLeasCalc = (props) => {
  return (
    <div className="result-parametrs-body">
      <div>
        <p className="result-parametrs-text-name">Сумма договора лизинга</p>

        <p className="result-parametrs-text-value">
          {props.resultLeas + " " + "₽"}
        </p>
      </div>
      <div>
        <p className="result-parametrs-text-name">Ежемесячный платеж от</p>{" "}
        <p className="result-parametrs-text-value">
          {props.resultTermpaym + " " + "₽"}
        </p>
      </div>

      <ButtonApply
        loading={props.loading}
        valueCost={props.valueCost}
        valueInitalPaymPer={props.valueInitalPaymPer}
        valueInitalPaymMoney={props.valueInitalPaymMoney}
        valueLeasTerm={props.valueLeasTerm}
        resultTermpaym={props.resultTermpaym}
        resultLeas={props.resultLeas}
      />
    </div>
  );
};

export default ResultsParametrsOfLeasCalc;
