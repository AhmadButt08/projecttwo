import { useState, useEffect } from "react";

function Effect() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      setCount(() => count + 1);
    }, 1000);
  }, []); // <- add empty brackets here
  
  return <h1>I've rendered {count} times!</h1>;
}

export default Effect;
