// filtering filters in search
// 2 lessons in one, also learning hooks and useEffect

import { useState } from "react";
import { useEffect } from "react";
import { CSSTransition } from "react-transition-group";

function Learning5() {
  const [filters, setFilters] = useState({});
  const [data, setData] = useState({ items: [] });

  //   this function runs every time regarless of lifecycle - mount, update...
  useEffect(() => {
    console.log("use effect asdfasdf");

    // for cleanup return a function that will run when component is unmounted.
    // so has mount and unmount all in one
    // runs when component is destroyed
    return () => {
      console.log("Learning 5 is unmounting");
    };
  });

  //   can have multiple useEffects
  // give a second argument - a list, that contains all the elements when changed, useEffect takes place
  // an empty list would be just on mount, [filters] update just when filters variable is changed
  useEffect(() => {
    console.log("running on filter");
  }, [filters]);

  const updateFilters = (searchParams) => {
    setFilters(searchParams);
  };

  const addItemToData = (item) => {
    let items = data["items"];
    item.id = items.length;
    items.push(item);
    setData({ items: items });
  };

  //   adding a function here to filter through data, so that only searched data is rendered
  //   - saves lots of props being passed around
  const filterData = (data) => {
    const filteredData = [];
    // this returns all list items if nothing is searched
    // !.name is used as comparing to empty object doesn't work
    if (!filters.name) {
      return data;
    }

    for (const item of data) {
      console.log(item);
      console.log(filters);
      if (filters.name !== "" && item.name !== filters.name) {
        continue;
      }
      console.log("working 1");
      if (filters.price !== 0 && item.price > filters.price) {
        continue;
      }
      console.log("working 2");
      if (filters.type !== "" && item.type !== filters.type) {
        console.log("broke");
        continue;
      }
      console.log("working 3");
      console.log(filters.type === "");
      if (filters.brand !== "" && item.brand !== filters.brand) {
        continue;
      }
      console.log("working 4");
      filteredData.push(item);
    }

    return filteredData;
  };

  return (
    <div>
      <h1>Learning 5</h1>

      <p>filtering and searching for data</p>
      {/* <CSSTransition classNames="css-transition">
        <p>CSS transition compontns</p>
      </CSSTransition> */}
      <p>asdfa</p>

      <ItemDisplay items={filterData(data["items"])} />
      <SearchBar updateSearchParams={updateFilters} />
      <AddItem addItem={addItemToData} />
    </div>
  );
}

function AddItem(props) {
  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);
  const [type, setType] = useState("");
  const [brand, setBrand] = useState("");

  const addItemButtonPressed = () => {
    props.addItem({
      name: name,
      price: price,
      type: type,
      brand: brand,
    });
    setName("");
    setPrice(0);
    setType("");
    setBrand("");
  };

  return (
    <div>
      <h2> Add Item Below</h2>
      <form>
        <label htmlFor="name-field">Name:</label>
        <input
          id="name-field"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
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
      {props.items.map((item) => {
        return (
          <div key={item.id}>
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
        <label htmlFor="price-field">Max Price:</label>
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

export default Learning5;
