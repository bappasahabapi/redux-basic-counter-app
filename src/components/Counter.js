// import React, { useState } from 'react'



const Counter = () => { 
  
    const [count, setCount] =useState(1);
   const  incrementHandler=()=>{
    setCount(count+1);
   } 
  return (
    <>
    <div>
        <h1>This is basic-counter-app</h1>
        <h2>Counter :  {value} </h2>
        <button onClick={incrementHandler}>Increment</button>
        
    </div>
        
    </>
    

  )
}

export default Counter;