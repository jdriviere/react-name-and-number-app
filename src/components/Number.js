import React, { Component } from 'react';

class Number extends Component {
  // Constructor
  constructor() {
    super();
    this.state = {
      age: 0
    };
  } // End of Constructor

  // Handler Functions
  addNumberHandler = () => {
    this.setState({
      age: this.state.age + 1
    });
  };
    
  subtractNumberHandler = () => {
    this.setState({
      age: this.state.age - 1
    });
  };
    
  // Render
  render() {
    return (
      <div>
        {/* TEXT */}
        {this.state.age <= -1 ? <h1 className="make-text-danger">{this.state.age}</h1>
        : this.state.age === 0 ? <h1>{this.state.age}</h1>
        : <h1 className="make-text-success">{this.state.age}</h1>}

        {/* BUTTONS */}
        <div className="buttons make-centered">
          <button
            className="button make-small make-info"
            onClick={this.subtractNumberHandler}>-</button>
          <button
            className="button make-small make-info"
            onClick={this.addNumberHandler}>+</button>
        </div>
      </div>
    );
  };
} // End of Class

export default Number;