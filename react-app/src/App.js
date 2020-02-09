import React, {Component} from 'react';
import './App.css';
import Greet from './components/Greet';
import GreetClass from './components/GreetClass';
import JsxTest from './components/JsxComponent';
import StateComponent from './components/StateComponent';
import Counter from './components/Counter';
import Event from './components/EventHandling';
import Parent from "./components/Parent";

class App extends Component {
    render() {
        return (
            <div className="App">
                <Parent/>
                <Event/>

                <h3>React Component Set State</h3>
                <hr/>
                <Counter/>

                <h3>React State</h3>
                <StateComponent/>
                <hr/>

                <h3>Basic & Prop passing</h3>
                <Greet name="Nadeeshani" yr="2050"/>
                <Greet name="Nipun" yr="2080"/>
                <GreetClass name="Nadeeshani" yr="2050"/>
                <GreetClass name="Nipun" yr="2080"/>
                <JsxTest/>
                <hr/>

            </div>
        );
    }
}

export default App;
