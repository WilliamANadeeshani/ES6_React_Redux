import React, {Component} from 'react';

class Child extends Component{


   render() {
       return(<button onClick={() => this.props.advice('child')}>Parent-Child</button>)
   }
}

export default Child;