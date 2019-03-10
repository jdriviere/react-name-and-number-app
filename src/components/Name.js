import React, { Component } from 'react';

class Name extends Component {
  // Constructor
  constructor() {
    super();
    this.state = {
      name: ""
    };
  } // End of Constructor

  // Handlers Functions
  setNameHandler = () => {
    let newName = "John Doe";
    this.setState({
      name: newName
    });
  };

  removeNameHandler = () => {
    let name = this.state.name;

    if (name !== "")
      this.setState({
        name: ""
      });
  };

  updateNameHandler = (e) => {
    this.setState({
      name: e.target.value
    });
  };

  // Render
  render() {
    return (
      <div className = "wrapper">
        <div className = "columns">
          <div className = "column">
            {/* TEXT */}
            {this.state.name === "" ?
            <h3 className = "make-text-bold make-text-danger" > No name is recorded... </h3>
            : <h3 className = "make-text-bold make-text-success" > Your name is {this.state.name}! </h3>}

            {/* INPUT GROUP */}
            <div className = "input__addons">
              <button
                className = "button make-success"
                onClick = {this.setNameHandler}>Call Me Doe...
              </button>
              <input
                className = "input"
                type = "text"
                value = {this.state.name}
                placeholder = "Type a name and see the change..."
                onChange = {this.updateNameHandler}/>
              <button
                className = "button make-danger"
                onClick = {this.removeNameHandler}>Remove Name</button>
            </div>
          </div>
        </div>
      </div>
    );
  };
} // End of Class

export default Name;