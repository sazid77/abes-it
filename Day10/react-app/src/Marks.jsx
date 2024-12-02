import React from 'react'

const Marks = ({name,roll,m1,m2,m3}) => {
  return (
    <div>
      <h1>marksheet</h1>
      <h2>Name : {name}</h2>
      <h2>Roll no:{roll}</h2>
      <h2>semester 1 : {m1}</h2>
      <h2>semester 2 : {m2}</h2>
      <h2>semester 3 : {m3}</h2>
      
       <h2></h2>
    </div>
  )
}

export default Marks