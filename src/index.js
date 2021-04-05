import React from 'react';
import ReactDOM from 'react-dom';

import Wheel from './components/wheel';

import './styles.css';

export class App extends React.Component {
  constructor() {
    // Defining an array to mention the components which will get displayed on
    // the sprinning wheel
    super();
    this.places =['Better luck next time', '2X Savings', '₹ 50 💵', '₹ 20 💵', '₹ 100 Cashback', '₹ 50 💵', '1.5X Savings', '2X Savings'];
  }

  render() {
    return (
      <div className="App">
        <h1>Your Rewards</h1>
        <Wheel items={this.places} />
      </div>
    );
  }
}

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);
