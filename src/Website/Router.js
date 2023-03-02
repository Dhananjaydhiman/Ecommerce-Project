import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './Navbar'
import Home from './Home'
import Items from './Items'
import AddToCart from './AddToCart'


const Router = () => {
   return (
      <>
         <BrowserRouter>
            <Navbar />
            <Routes>
               <Route path='/' element={<Home />} />
               <Route path='/items' element={<Items />} />
               <Route path='/cart' element={<AddToCart />} />
            </Routes>
         </BrowserRouter>
      </>
   )
}

export default Router