import React from 'react'
import { BrowserRouter , Routes , Route} from "react-router-dom"
import Home from './pages/Home/Home'
import Login from './pages/LogIn/LogIn'
import Signup from './pages/SignUp/SignUp'

const routes = (
  <BrowserRouter>
    <Routes>
      <Route path='/dashboard' exact element = { <Home/>} />
      <Route path='/Login' exact element = { <Login/>} />
      <Route path='/Signup' exact element = { <Signup/>} />
    </Routes>
  </BrowserRouter>
)

function App() {
  return (
    <div>
      {routes}
    </div>
  )
}

export default App