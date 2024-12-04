import React from 'react'
import CounterApp from './Components/CounterApp'
import ImageApp from './Components/ImageApp'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import MianLayout from './Components/MianLayout'
const App = () => {
  return (

  <BrowserRouter>
  <Routes>
    <Route  path='/'  element={<MianLayout/>}>
      <Route path='/CounterApp'  element={<CounterApp/>} />
      <Route path='/ImageApp'  element={<ImageApp/>} />
    </Route>
  </Routes>
  </BrowserRouter>

  )
}

export default App