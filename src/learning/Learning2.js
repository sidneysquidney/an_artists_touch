// learning about state. state can be passed down to Children.
// can configure hierarchy to be efficient and not change whole app
// when just one component needs state changing

import React, { useState } from "react";

function Learning2() {
  return (
    <div>
      <h1>Learning 2</h1>
      <p>all the stuff from state on</p>
      <ButtonState />
      <Info />
    </div>
  );
}

function ButtonState() {
  // title is variable name storing state, setTitle is function used to change state,
  // arg in useState is deafulat value for variable(title)
  // need to import useState from react to use
  const [title, setTitle] = useState("");
  const [counter, setCounter] = useState(0);

  function updateTitle() {
    setTitle("new title");
  }

  function updateCounter() {
    setCounter(counter + 1);
  }

  return (
    <div>
      <p>Title: {title}</p>
      <p>Counter: {counter}</p>
      <Data title={title} counter={counter} />
      <button onClick={updateTitle}>Update title</button>
      <button onClick={updateCounter}>Update counter</button>
    </div>
  );
}

// can pass state down do children
function Data(props) {
  return (
    <div>
      <p>title: {props.title}</p>
      <p>counter: {props.counter}</p>
    </div>
  );
}

// class component state
class Info extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      title: "sidneysquidney",
    };
  }

  // function to be called in onCLick arrow function in button
  // if only count is in setState, only counts state will be chagned
  buttonPress() {
    this.setState({
      count: this.state.count + 1,
    });
  }

  render() {
    return (
      <div>
        <p>class count: {this.state.count}</p>
        <p>class title: {this.state.title}</p>
        {/* arrow funciton must be used here cannot just pass in function */}
        <button onClick={() => this.buttonPress()}>Change class counter</button>
      </div>
    );
  }
}

// state passed down is done through props argument, state passed up is done through callbacks

export default Learning2;
