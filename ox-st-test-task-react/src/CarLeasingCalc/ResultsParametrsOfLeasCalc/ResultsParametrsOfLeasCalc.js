import React from "react";
import "./ResultsParametrsOfLeasCalc.css";

const ResultsParametrsOfLeasCalc = (props) => {
  return (
    <div className="result-parametrs-body">
      {" "}
      {props.calcResultsParametrs.map((calcResultsParametr) => (
        <div className="result-parametrs-text" key={calcResultsParametr.id}>
          <p className="result-parametrs-text-name">
            {calcResultsParametr.name}
          </p>
          <div>
            <p className="result-parametrs-text-value">
              {calcResultsParametr.value + " " + calcResultsParametr.money}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ResultsParametrsOfLeasCalc;
