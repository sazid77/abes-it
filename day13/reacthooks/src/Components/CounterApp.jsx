import React, { useState } from 'react';
import './CounterApp.css';
const CounterApp = () => {
  const [count,setcount]=useState(0)
  return (
   <>
   <div className='disp'>
  <h1 className='header'>{count}</h1>
  <button className='btn' onClick={()=>setcount(count +1)}>Increment count</button>
  <button className="btn" onClick={()=>setcount(0)}>reset count</button>
  <button className="btn" onClick={()=>setcount(count-1)} >decrement count</button>
   </div>
    
   </>
  )
}

export default CounterApp