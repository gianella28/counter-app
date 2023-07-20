import { useState } from "react";
import  PropTypes, { object } from "prop-types";


export const CounterApp = ({ value }) => {
     
    const re=value;
    const [counter,setCounter] = useState(value);
    /*function handleAdd(event, newValue) {
        console.log(event);
        //console.log(newValue);
    }*/
    // 3 formas de hacer el handle
    
    const handleAdd = () => {
       // console.log(event);
        // hook forma 1
        //setCounter( counter + 1);
        // hook forma 2
        setCounter( (c) => c + 1)
    }

    const handleMenos = () => setCounter( counter - 1);
    
    const handleReset = () => {
        setCounter( value )
    }

    return (
        <>
        <h1>CounterApp</h1>
    
        <h2> { counter} </h2>
        <button onClick={  handleAdd }>+1</button>
        <button onClick={  handleMenos }>-1 </button>
        <button aria-label="btn-reset" onClick={ handleReset }> Reset </button>
        </>
    )
}

CounterApp.propTypes = {
    value: PropTypes.number.isRequired
 }