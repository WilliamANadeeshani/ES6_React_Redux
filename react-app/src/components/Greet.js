import React from 'react';

const Greet = (props) => {
    const  {name, yr} = props;

    return <h1>Hello {name}, You die in  {yr} world</h1> ;
};

export default Greet;

