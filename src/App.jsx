import { useState } from 'react'
import {BrowserRouter as Router,
  Routes,
  Route,
  Navigate
} from 'react-router-dom'
import Login from './components/Login'
import Register from './components/Register'
import Product from './components/Product'

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Navigate to= "/login"/> }/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/register' element={<Register/>}/>+
          <Route path= '/products' element={<Product/>}/>
        </Routes>
      </Router>
    </>
  )
}

export default App
