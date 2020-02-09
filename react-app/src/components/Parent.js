import React, {Component} from 'react';
import Child from './Child';

class Parent extends Component{

    constructor(props){
        super(props);
        this.state ={
            parentName : "Malani"
        };
        this.teachChild = this.teachChild.bind(this);
    };

    teachChild(paramFromChild){
        alert(`Hello, ${this.state.parentName}, ${paramFromChild}`)
    };

    render(){
        return <Child advice={this.teachChild}/>
    };
}

export default Parent;