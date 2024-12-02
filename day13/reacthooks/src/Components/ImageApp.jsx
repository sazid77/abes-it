import React, { useState } from 'react'
import './ImageApp.css'
import img1 from '../Images/img1.avif'
const ImageApp = () => {
  const [Width, setWidth] = useState(200)
  const [height, setheight] = useState(200)
  const [rotation, setrotation] = useState(0)
  return (
<>
<div className='disp'>
    <div className='image'>
    <img src={img1} style={{width:Width ,height:height , transform:`rotate(${rotation}deg)`} } />
    </div>
   
    

    <div className='panel'>
      <button className='btn' onClick={()=>setWidth(Width+10)}>Increment width</button>
      <button className='btn' onClick={()=>setheight(height+10)}>Increment height</button>
      <button className='btn'onClick={()=>setWidth(Width-10)}>Decrement width</button>
      <button className='btn'onClick={()=>setheight(height-10)}>Decrement height</button>
      <button className='btn'onClick={()=>setrotation(rotation+10)}>Rotate clockwise</button>
      <button className='btn' onClick={()=>setrotation(rotation-10)}>Rotate anticlockwise</button>
    </div>
    </div>
</>
  )
}

export default ImageApp