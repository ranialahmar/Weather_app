import React, { Component } from 'react';
import axios from 'axios'
import './App.css';
import Titles from './Titles';

class App extends Component {
  state = {
    city: 'Tunis',
    temp: undefined
  }

  handleInputChange = param =>
    this.setState({ city: param.target.value })

  getTemp = () => {
    axios.get("https://api.openweathermap.org/data/2.5/find?q=" +this.state.city +"&units=metric&appid=ee8912e9ddc0d5c1229e6cb94b0dd4a0")
      .then(response =>
        this.setState({ temp: response.data.list[0].main.temp }))
      .catch(error => console.log(error))
  }


                                  
  render() {
    return (
      <div className="App">
       <div className="container">
        <header className="App-header">
        <div className="col-xs-5 title-container">
          <Titles/>
        </div>
          <input onChange={this.handleInputChange} value={this.state.city} />
          <button onClick={() => this.getTemp()} >Click</button>
          {this.state.temp !== undefined &&
            <p>{this.state.temp} °C</p>}
        </header>
      </div>
      </div>
    );
  }
}

export default App;
