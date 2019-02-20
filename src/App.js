import React, { Component } from 'react';
import axios from 'axios'
import './App.css';
import Titles from './Titles';
import Comp from './compo';

class App extends Component {
  state = {
    city: 'Tunis',
    temp: undefined ,
    humidity: undefined,
    description: undefined
  }

  handleInputChange = param =>
    this.setState({ city: param.target.value })

  getTemp = () => {
    axios.get("https://api.openweathermap.org/data/2.5/find?q=" +this.state.city +"&units=metric&appid=ee8912e9ddc0d5c1229e6cb94b0dd4a0")
      .then(response =>
        this.setState({ temp: response.data.list[0].main.temp ,
          humidity:  response.data.list[0].main.humidity ,
          description: response.data.list[0].weather[0].description
        }))
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
          <hr></hr>
          <hr></hr>
          <input onChange={this.handleInputChange} value={this.state.city} />
          <button onClick={() => this.getTemp()} >Get Weather</button>
          <div>
          {this.state.temp !== undefined &&  <p>Temperature:{this.state.temp} °C</p>  }
          {this.state.humidity !== undefined &&  <p>Humidity :{this.state.humidity}</p>  }           
          {this.state.description!== undefined &&  <p>Description :{this.state.description} in <Comp envoi={this.state.city}/></p>  } 
          </div>
         
        </header>
        
      </div>
      </div>
    );
  }
}

export default App;
