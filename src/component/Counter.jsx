

import { useState } from 'react';
const Counter=()=>{
  const [counter ,setCounter]=useState(0);
  const increament=()=>{
    setCounter(counter+1)
  }

  const decreament=()=>{
    setCounter(counter-1)
  }
  
  return (
    <div>
      <h2> Counter</h2>
      <span>{counter}</span>
       <div>
       <button onClick={increament}> increament</button>
       <button onClick={decreament}> decreament</button>
       </div>
       </div>
   
  );

}

  export default Counter;