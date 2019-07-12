import React, {Component} from 'react';


import { useState } from 'react';



// I THOUGHT WE ARE USING A CLASS. WHY IS IT EXTENDING FROM SOMETHING?
class Counter2 extends Component {
    // WAIT ... THIS WORKS???
    state = { value: 0 };


   
  
    // I THOUGH IT'S THIS WAY, BUT WHY DO I NEED PROPS HERE?
    // constructor(props) {
    //  SUPER???
    //  super(props);
    //
    //  this.state = {
    //    value: 0,
    //  };
    // }
  
    // WHY DO I HAVE TO USE AN ARROW FUNCTION???
    onIncrement = () => {
      this.setState(state => ({
        value: state.value + 1
      }));
    };
  
    // SHOULDN'T IT BE this.onDecrement = this.onDecrement.bind(this); in the constructor???
    // WHAT'S this.onDecrement = this.onDecrement.bind(this); DOING ANYWAY?
    onDecrement = () => {
      this.setState(state => ({
        value: state.value - 1
      }));
    };
  
    render() {
      return (
        <div>
          {this.state.value}
  
          {/* WHY IS EVERYTHING AVAILABLE ON "THIS"??? */}
          <button onClick={this.onIncrement}>+</button>
          <button onClick={this.onDecrement}>-</button>
        </div>
      )
    }
  }


  export default Counter2;