import { useState } from 'react'
import './Count.css'


const Count = () => {
    const [count, setCount] = useState(0);
    const increment = () =>{
        setCount (count+1);
    };
    const decrement = () =>{
        setCount(count-1);
    };
    const reset =() =>{
        setCount(0);
    };
  return (
    <div className="counting"><h2>Counting Application</h2>
    <button className="inc" onClick={increment}>Click Me to increment!</button>
    <button className="dec" onClick={decrement}>Click Me to decrement!</button>
    <button className="res" onClick={reset}>Click Me to reset!</button>
    <h2>Count is : {count}</h2>
    </div>
    
  );
};

export default Count