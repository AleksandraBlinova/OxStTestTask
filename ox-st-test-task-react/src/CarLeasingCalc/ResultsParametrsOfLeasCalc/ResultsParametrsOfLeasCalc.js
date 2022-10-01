import React from "react";
import "./ResultsParametrsOfLeasCalc.css";
import ButtonApply from "./ButtonApply/ButtonApply";

const ResultsParametrsOfLeasCalc = (props) => {
  return (
    <div className="result-parametrs-body">
      {" "}
      {props.calcResultsParametrs.map((calcResultsParametr) => (
        <div className="result-parametrs-text" key={calcResultsParametr.id}>
          <p className="result-parametrs-text-name">
            {calcResultsParametr.name}
          </p>
        </div>
      ))}
      <ButtonApply
        loading={props.loading}
        valueCost={props.valueCost}
        valueInitalPaymPer={props.valueInitalPaymPer}
        valueInitalPaymMoney={props.valueInitalPaymMoney}
        valueLeasTerm={props.valueLeasTerm}
        resultTermpaym={props.resultTermpaym}
        resultLeas={props.resultLeas}
      />
      <div className="result-texts-container">
        {" "}
        <p className="result-parametrs-text-value">
          {props.resultLeas + " " + "₽"}
        </p>
        <p className="result-parametrs-text-value">
          {props.resultTermpaym + " " + "₽"}
        </p>
      </div>
    </div>
  );
};

export default ResultsParametrsOfLeasCalc;
