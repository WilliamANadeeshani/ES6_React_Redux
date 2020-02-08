import React, {Component} from 'react';
import './App.css';
import Greet from './components/Greet';
import GreetClass from './components/GreetClass';
import JsxTest from './components/JsxComponent';
import StateComponent from './components/StateComponent';

class App extends Component{
  render() {
    return (
        <div className="App">
            <Greet name="Nadeeshani" yr="2050"/>
            <Greet name = "Nipun" yr ="2080"/>
            <GreetClass name="Nadeeshani" yr="2050"/>
            <GreetClass name = "Nipun" yr ="2080"/>
            <JsxTest/>

            <hr/>

            <StateComponent/>
        </div>
    );
  }
}

export default App;
