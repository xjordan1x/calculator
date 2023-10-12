import React, { useState, useCallback, useEffect } from "react";
import "./Calculator.css";

function Calculator() {
  const [input, setInput] = useState("");
  const [result, setResult] = useState("");
  const [memory, setMemory] = useState("");
  const [operation, setOperation] = useState("");
  const [history, setHistory] = useState([]);

  const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

  const handleButtonClick = useCallback((value) => {
    if (value === "=") {
      try {
        const calculatedResult = eval(input);
        setHistory([...history, `${input} = ${calculatedResult}`]);
        setResult(calculatedResult.toString());
        setMemory("");
      } catch (error) {
        setResult("Error");
      }
      setInput("");
    } else if (value === "C") {
      setInput("");
      setResult("");
      setMemory("");
    } else if (numbers.includes(value)) {
      setInput(input + value);
    } else if (["+", "-", "*", "/"].includes(value)) {
      setOperation(value);
      setMemory(input);
      setInput("");
    }
  }, [input, history]);

  useEffect(() => {
    // Guardar el historial en el almacenamiento local
    localStorage.setItem("calculatorHistory", JSON.stringify(history));
  }, [history]);

  return (
    <div className="container">
      <div className="card">
        <div className="card-body">
          <h4 className="card-title">Calculator</h4>
          <div className="input_container">
            <input type="text" className="form-control" value={input} readOnly />
            <input type="text" className="form-control" value={result} readOnly />
          </div>
          <div className="all_buttons_container">
            <div className="container_numbers">
              {numbers.map((number) => (
                <div key={number} className="container_numbers-number">
                  <button
                    className="btn btn-primary btn-block"
                    onClick={() => handleButtonClick(number)}
                  >
                    {number}
                  </button>
                </div>
              ))}
            </div>
            <div className="butons_operator_container">
              {["+", "-", "*", "/", "="].map((operator) => (
                <div key={operator} className="butons_operator">
                  <button
                    className={`btn btn-${operator === "=" ? "success" : "primary"} btn-block`}
                    onClick={() => handleButtonClick(operator)}
                  >
                    {operator}
                  </button>
                </div>
              ))}
              <div className="butons_operator">
                <button
                  className="btn btn-danger btn-block"
                  onClick={() => handleButtonClick("C")}
                >
                  C
                </button>
              </div>
            </div>
          </div>
          {/* Renderizar el historial de cálculos */}
          <div className="history">
            <h5>Historial</h5>
            <ul>
              {history.map((calculation, index) => (
                <li key={index}>{calculation}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Calculator;
