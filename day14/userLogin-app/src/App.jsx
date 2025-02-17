import React, { useState } from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import MainLayout from './Component/MainLayout'
import Login from './Component/Login'
import Register from './Component/Register'
import DashBoard from './Component/DashBoard'
const App = () => {
   const [data, setdata] = useState()

  return (
    <BrowserRouter>
    <Routes>
      <Route path='/'element={<MainLayout/>} >
        <Route  path='/login' element={<Login/>}/>
        <Route path='/register' element={<Register/>} />

      </Route>
      <Route path='/dashbord' element={<DashBoard/>} />
    </Routes>
    </BrowserRouter>
  )
}

export default App