import React from 'react'
import { UserContext } from './WebParent'
import { useContext } from 'react'
import { NavLink } from 'react-router-dom'


const Navbar = () => {
   const { searchInput, handleChange, } = useContext(UserContext);

   // console.log(cartdata)
   // console.log(searchInput)




   return (
      <>
         <div id='navbar'>
            <div className='d-flex'>
               <div className='navlink'>
                  <NavLink className='link ' to="/" style={({ isActive }) => ({ fontWeight: isActive ? "bold" : "normal" })}>Home</NavLink>
               </div>
               <div className='navlink'>
                  <NavLink className='link' to="/items" style={({ isActive }) => ({ fontWeight: isActive ? "bold" : "normal" })}>Items</NavLink>
               </div>
               <div className='navlink'>
                  <NavLink className='link' to="/cart" style={({ isActive }) => ({ fontWeight: isActive ? "bold" : "normal" })}> <i className="fa-brands fa-opencart"></i> Cart</NavLink>
               </div>
            </div>
            <div className='navlink  searchdiv'  >
               <input className="search w-100" type="search" placeholder='Search your product by title' onChange={handleChange} value={searchInput} />
               {/* <button className="search">Search</button> */}
            </div>
         </div>
      </>
   )
}

export default Navbar

//   https://dummyjson.com/products     (api )