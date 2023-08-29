import React from "react";
import { useState } from "react";

function State() {
    //using object in a state
    const [brand, setBrand] = useState("Lamboo");
    const [color, setColor] = useState("White");
    const [model, setModel] = useState("F");
    const [year, setYear] = useState("5555");
    
    const updateyear = () => {
      setYear("6666");
    }
  
    return (
      <>
        <h1>My {brand}</h1>
        <p>
          It is a {color} {model} from {year}.
        </p>
        <button
          type="button"
          onClick={updateyear}
        >click</button>
      </>
    )
  }
  
  export default State;
                
  