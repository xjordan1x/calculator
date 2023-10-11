import { useState } from "react";
import "./Calculator.css";
function Calculator() {
  const [input, setInput] = useState("");
  const [result, setResult] = useState("");
  const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

  const handleButtonClick = (value) => {
    if (value === "=") {
      try {
        setResult(eval(input).toString());
      } catch (error) {
        setResult("Error");
      }
      setInput("");
    } else if (value === "C") {
      setInput("");
      setResult("");
    } else {
      setInput(input + value);
    }
  };

  return (
    <div className="container">
      <div className="card">
        <div className="card-body">
          <h4 className="card-title">Calculator</h4>
          <div className="input_container">
            <input
              type="text"
              className="form-control"
              value={input}
              readOnly
            />
            <input
              type="text"
              className="form-control"
              value={result}
              readOnly
            />
          </div>
          <div className="all_buttons_container">
            <div className="container_numbers">
              {numbers.map((number) => (
                <>
                  <div className="container_numbers-number">
                    <button
                      className="btn btn-primary btn-block"
                      onClick={() => handleButtonClick(number)}
                    >
                      {number}
                    </button>
                  </div>
                </>
              ))}
            </div>
            <div className="butons_operator_container">
              <div className="butons_operator">
                <button
                  className="btn btn-primary btn-block"
                  onClick={() => handleButtonClick("+")}
                >
                  +
                </button>
              </div>
              <div className="butons_operator">
                <button
                  className="btn btn-primary btn-block"
                  onClick={() => handleButtonClick("-")}
                >
                  -
                </button>
              </div>
              <div className="butons_operator">
                <button
                  className="btn btn-primary btn-block"
                  onClick={() => handleButtonClick("*")}
                >
                  *
                </button>
              </div>
              <div className="butons_operator">
                <button
                  className="btn btn-success btn-block"
                  onClick={() => handleButtonClick("=")}
                >
                  =
                </button>
              </div>
              <div className="butons_operator">
                <button
                  className="btn btn-primary btn-block"
                  onClick={() => handleButtonClick("/")}
                >
                  /
                </button>
              </div>
              <div className="butons_operator">
                <button
                  className="btn btn-danger btn-block"
                  onClick={() => handleButtonClick("C")}
                >
                  C
                </button>
              </div>
              {/* Include more rows and buttons */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Calculator;