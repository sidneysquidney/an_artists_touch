// adding addItem and display item
// add item has a callback, sends back to top Comp, sends down to displayItem in prop,
// then uses a map function to display in a list

import { useState } from "react";

function Learning4() {
  const [filters, setFilters] = useState({});
  const [data, setData] = useState({ items: [] });

  const updateFilters = (searchParams) => {
    setFilters(searchParams);
  };

  //   added as callback to add item to data variable
  const addItemToData = (item) => {
    let items = data["items"];
    // add id
    item.id = items.length;
    items.push(item);
    setData({ items: items });
    // console.log(data);
  };

  return (
    <div>
      <h1>Learning 4</h1>
      <p>displaying data dynamically</p>
      {/* update search params is the new name for the callback prop */}
      <SearchBar updateSearchParams={updateFilters} />
      <AddItem addItem={addItemToData} />
      {/* new componenet to display data */}
      <ItemDisplay items={data["items"]} />
    </div>
  );
}

function AddItem(props) {
  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);
  const [type, setType] = useState("");
  const [brand, setBrand] = useState("");

  // event handler funciton for button press
  const addItemButtonPressed = () => {
    // access the callback and pass in the data to go back to the parent component
    props.addItem({
      name: name,
      price: price,
      type: type,
      brand: brand,
    });
    // these lines to clear input fields after button is pressed
    setName("");
    setPrice(0);
    setType("");
    setBrand("");
  };

  return (
    <div>
      <h2> Add Item Below</h2>
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
        <label htmlFor="price-field">Price:</label>
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
        <button type="button" onClick={addItemButtonPressed}>
          Add Item
        </button>
      </form>
    </div>
  );
}

function ItemDisplay(props) {
  return (
    <div>
      <h3>Item Display</h3>
      {/* can use maps technique to display multiple items from a list */}
      {props.items.map((item) => {
        return (
          <div>
            {/* id added - can use item.id or item['id'] syntax  */}
            <p>ID: {item.id}</p>
            <p>Name: {item["name"]}</p>
            <p>Price: {item["price"]}</p>
            <p>type: {item["type"]}</p>
            <p>brand: {item["brand"]}</p>
          </div>
        );
      })}
    </div>
  );
}

function SearchBar(props) {
  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);
  const [type, setType] = useState("");
  const [brand, setBrand] = useState("");

  const searchButtonPressed = () => {
    props.updateSearchParams({
      name: name,
      price: price,
      type: type,
      brand: brand,
    });
  };

  return (
    <div>
      <h2>Search Bar</h2>
      <form>
        <label htmlFor="name-field">Name:</label>
        <input
          id="name-field"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
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
        <button type="button" onClick={searchButtonPressed}>
          Search
        </button>
      </form>
    </div>
  );
}

export default Learning4;
