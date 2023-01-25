import { useState } from "react";

import quoteFunction from "./quote-function";

function QuoteGenerator(props) {
  const [quote, setQuote] = useState(0);
  const [windows, setWindows] = useState(0);
  const [bigWindows, setBigWindows] = useState(0);
  const [nooks, setNooks] = useState(0);

  const quoteButtonPressed = () => {
    setQuote(quoteFunction(windows, bigWindows, nooks));
  };

  return (
    <div>
      <form>
        <label htmlFor="small-windows-field">Small windows:</label>
        <input
          id="small-windows-field"
          type="number"
          min="0"
          max="100"
          value={windows}
          onChange={(e) => setWindows(e.target.value)}
        />
        <label htmlFor="big-windows-field">Big windows:</label>
        <input
          id="big-windows-field"
          type="number"
          min="0"
          max="100"
          value={bigWindows}
          onChange={(e) => setBigWindows(e.target.value)}
        />
        <label htmlFor="nooks-field">Hard to reach windows</label>
        <input
          id="nooks-field"
          type="number"
          min="0"
          max="100"
          value={nooks}
          onChange={(e) => setNooks(e.target.value)}
        />
        <button type="button" onClick={quoteButtonPressed}>
          Quotes start from £30
        </button>
      </form>
      <p>Your quote estimate is: {quote}</p>
    </div>
  );
}

export default QuoteGenerator;
