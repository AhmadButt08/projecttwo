import React from "react";
import { useState } from "react";

function Car() {
    //using object in a state
    const [car, setCar] = useState({
      brand: "Ford",
      model: "Mustang",
      year: "1964",
      color: "red"
    });
    
    const update = () => {
      setCar(previousState => {
        return { ...previousState, year: "5555" }
      });
    }
  
    return (
      <>
        <h1>My {car.brand}</h1>
        <p>
          It is a  {car.model} from {car.year}.
        </p>
        <button
          type="button"
          onClick={update}
        >click</button>
      </>
    )
  }
  
  export default Car;
                
  