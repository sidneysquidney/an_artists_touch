import { useState } from "react";

import quoteFunction from "./quote-function";

import "./QuoteGenerator.css";

function QuoteBar(props) {
  const [quote, setQuote] = useState(30);
  const [windows, setWindows] = useState(0);
  const [bigWindows, setBigWindows] = useState(0);
  const [nooks, setNooks] = useState(0);
  const [buttonPressed, setButtonPressed] = useState(false);

  const quoteButtonPressed = () => {
    setButtonPressed(true);
    setQuote(quoteFunction(windows, bigWindows, nooks));
  };

  return (
    <div>
      <form>
        <div className="quotebar-container">
          <div className="quotebar-box">
            <label htmlFor="small-windows-field">Small windows: </label>
            <input
              id="small-windows-field"
              type="number"
              min="0"
              max="100"
              value={windows}
              onChange={(e) => setWindows(e.target.value)}
            />
          </div>
          <div className="quotebar-box" id="middle-box">
            <label htmlFor="big-windows-field">Big windows: </label>
            <input
              id="big-windows-field"
              type="number"
              min="0"
              max="100"
              value={bigWindows}
              onChange={(e) => setBigWindows(e.target.value)}
            />
          </div>
          <div className="quotebar-box">
            <label htmlFor="nooks-field">Hard to reach windows: </label>
            <input
              id="nooks-field"
              type="number"
              min="0"
              max="100"
              value={nooks}
              onChange={(e) => setNooks(e.target.value)}
            />
          </div>
          <div
            className="quotebar-button"
            id={props.background == "blue" ? "blue-background" : ""}
            onClick={quoteButtonPressed}
          >
            <button type="button">
              {/* <div quote-button-text> */}

              <p>
                {buttonPressed
                  ? "Your quote estimate is "
                  : "Quotes start from "}
              </p>
              <p className="quote-number-bold">£{quote}</p>

              <p className="float-right">{"   →"}</p>

              {/* </div> */}

              {/* {buttonPressed ? "£" + quote : "Quotes start from £" + quote} */}
            </button>
          </div>
        </div>
      </form>
      {/* <div className="quote-estimate">
        <p className="inline-text">Your quote estimate is </p>
        <p className="quote-number-bold inline-text">£{quote}</p>
      </div> */}
    </div>
  );
}

export default QuoteBar;
