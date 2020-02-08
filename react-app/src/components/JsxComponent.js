import React, {Component} from 'react';

class JSX extends Component{
    render() {
        return React.createElement('div', {id : "jsx"}, React.createElement('h1', null, 'hello jsx world.' ));
    }
}

export default JSX;