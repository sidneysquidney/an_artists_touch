import "./App.css";
import React from "react";
import { propTypes } from "prop-types";

function App() {
  return (
    <div className="App">
      <p>bare bones app </p>
      <Header />
      <Header2 />
      {/* <AddItem /> */}
      {/* <AddItem /> */}
      <AddItem2 />
    </div>
  );
}

export default function Learning() {
  return (
    <div>
      <p>bare bones app </p>
    </div>
  );
}

function Header() {
  const title = "An Artists Touch";
  const showTitle = true;

  return (
    <div>
      <h1>{showTitle ? title : "No Title"}</h1>
      <p>window cleaning time</p>
    </div>
  );
}

function Header2() {
  const title = "An Artists Touch";
  const showTitle = false;
  if (showTitle) {
    return (
      <div>
        <h1>{showTitle ? title : "No Title"}</h1>
        <p>window cleaning time boys</p>
      </div>
    );
  } else {
    return (
      <div>
        <p>No title Loser</p>
      </div>
    );
  }
}

function AddItem() {
  const value = "sid the great";
  return (
    <form>
      <label id="text-input">label here:</label>
      <input type="text" value={value} id="text-input"></input>
    </form>
  );
}

// import must be at the top

class AddItem2 extends React.Component {
  //class based component
  render() {
    const value = "sid the great";
    return (
      <form>
        <label id="text-input">label here:</label>
        <input type="text" value={value} id="text-input"></input>
      </form>
    );
  }
}

// export default App;

function AddItem3(props) {
  //add props
  const value = props.value;
  const number = props.number;
  return (
    <form>
      <label id="text-input">label here:</label>
      <input type="text" value={value} id="text-input"></input>
    </form>
  );
}

function AddItem4({ value, number = 4 }) {
  //number has a default
  return (
    <form>
      <label id="text-input">{number}</label>
      <input type="text" value={value} id="text-input"></input>
    </form>
  );
}

function AddItem5(props) {
  //number has a default
  return (
    <form>
      <label id="text-input">{props.number}</label>
      <input type="text" value={props.value} id="text-input"></input>
    </form>
  );
}
AddItem5.defaultProps = {
  //default arguments for parameter props
  number: 10,
  value: "sid the boss",
};

AddItem5.propTypes = {
  //more advanced, adds to make user know the right type
  number: propTypes.number,
  value: propTypes.string,
};
