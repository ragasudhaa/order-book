import React, { Component } from 'react';
import Websocket from 'react-websocket';
import OrderBook from './Components/OrderBook';
import './App.css';

class App extends Component {

  constructor() {
    super();
    this.state = {
      askOrders: [],
      bidOrders: []
    };
  }

  handleData(rawData) {
    let data = JSON.parse(rawData);
    
    
    let askOrders = data.filter((type,index) => data[index].type === "ask" )
    let bidOrders = data.filter((type,index) => data[index].type ===  "bid" )
    
    this.setState({
      askOrders: askOrders,
      bidOrders: bidOrders
    });
  }

  render() {
    return (
      <div className="App">
        <h1 className="instrument">Order Book</h1>
        <Websocket
          url='ws://localhost:7979'
          onMessage={this.handleData.bind(this)}
          />
        <OrderBook askOrders={this.state.askOrders} bidOrders={this.state.bidOrders} />
      </div>
    );
  }
}

export default App;
