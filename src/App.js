import './App.css';
import { useState,useEffect} from 'react';
import Car from './Car'
import State from "./State"
import Effect from "./Effect";
  
const useDocumentTitle = title => {  
  useEffect(() => {  
    document.title = title;  
  }, [title])  
}  
  
function App() {  
  const [count, setCount] = useState(0);  
  const incrementCount = () => setCount(count + 1);  
  useDocumentTitle(`You clicked ${count} times`);  


  // useEffect(() => {  
  //   document.title = `You clicked ${count} times`  
  // });  
  
  return (  
    <div className='App'>  
      <h2>You clicked {count} times</h2>  
      <button onClick={incrementCount}>Click me</button>  
      <Car/>
      <State/>
      <Effect/>

    </div>
      
  )  
}  
export default App;