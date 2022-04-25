import React from 'react'
import { BrowserRouter, Route, Routes} from 'react-router-dom'
import Home from '../pages/Home'
import Basic from '../pages/Basic'


const routes = () => {
  return (
    <div>
    <BrowserRouter>
       <Routes>
           <Route exact path="/" element={<Home/>}/>
           <Route exact path="/basic-form" element={<Basic/>}/>
       </Routes>
    </BrowserRouter>
</div>
  )
}

export default routes