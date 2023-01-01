// using callbacks and eventhandlers

import { useState } from "react";

function Learning3() {
  // add data, and updateData to send callBack function to Component,
  // that can then pass state back to its parent - Learning3
  const [data, setData] = useState({});

  const updateData = (searchParams) => {
    setData(searchParams);
  };

  return (
    <div>
      <h1>Learning 3</h1>
      <p>forms and events</p>
      <SearchBar callback={updateData} />
      <QuoteBar />
      <h3>back to the parent Learning 3</h3>
      <p>Name: {"name" in data ? data["name"] : "nothing in data"}</p>
      <p>Price: {"price" in data ? data["price"] : "nothing in data"}</p>
      <p>Type: {"type" in data ? data["type"] : "nothing in data"}</p>
      <p>Brand: {"brand" in data ? data["brand"] : "nothing in data"}</p>
    </div>
  );
}

function SearchBar(props) {
  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);
  const [type, setType] = useState("");
  const [brand, setBrand] = useState("");

  // event handler funciton for button press
  const searchButtonPressed = () => {
    // access the callback and pass in the data to go back to the parent component
    props.callback({ name: name, price: price, type: type, brand: brand });
  };

  return (
    <div>
      <h2>Search Bar</h2>
      <form>
        {/* when you add values, they become fixed, 
        to be able to chagne we need to use event handlers (onChange) */}
        <label htmlFor="name-field">Name:</label>
        <input
          id="name-field"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        {/* htmlFor needed instead of for */}
        <label htmlFor="price-field">Mac Price:</label>
        <input
          id="price-field"
          type="number"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
        <label htmlFor="type-field">Type:</label>
        <input
          id="type-field"
          type="text"
          value={type}
          onChange={(e) => setType(e.target.value)}
        />
        <label htmlFor="brand-field">Brand:</label>
        <input
          id="brand-field"
          type="text"
          value={brand}
          onChange={(e) => setBrand(e.target.value)}
        />
        {/* by defualt btton type is submit, cahnge to button to stop actions on click
        add onclick for event handler function to be called*/}
        <button type="button" onClick={searchButtonPressed}>
          Search
        </button>
      </form>
    </div>
  );
}

function QuoteBar(props) {
  const [quote, setQuote] = useState(0);
  const [windows, setWindows] = useState(0);
  const [bigWindows, setBigWindows] = useState(0);
  const [nooks, setNooks] = useState(0);

  const quoteButtonPressed = () => {
    setQuote(quoteFunction(windows, bigWindows, nooks));
  };

  return (
    <div>
      <h2>An Artist's Touch Quote Generator</h2>
      <form>
        <label for="windows-field">Number of windows:</label>
        <input
          id="windows-field"
          type="number"
          value={windows}
          onChange={(e) => setWindows(e.target.value)}
        />
        <label for="big-windows-field">Number of big windows:</label>
        <input
          id="big-windows-field"
          type="number"
          value={bigWindows}
          onChange={(e) => setBigWindows(e.target.value)}
        />
        <label for="nooks-field">Number of nooks and crannys:</label>
        <input
          id="nooks-field"
          type="number"
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

function quoteFunction(windows, bigWindows, nooks) {
  let quote = 0;
  quote += windows * 5;
  quote += bigWindows * 10;
  quote += nooks * 5;
  if (quote > 30) {
    return quote;
  } else {
    return 30;
  }
}

export default Learning3;
