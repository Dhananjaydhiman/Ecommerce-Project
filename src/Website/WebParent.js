import React from 'react'
import { useEffect, useState } from 'react'
import Router from './Router';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export const UserContext = React.createContext();

const WebParent = () => {
   const [product, setProduct] = useState([])
   const [searchInput, setSearchInput] = useState("");
   const [cartdata, setCartdata] = useState([])
   const [total, setTotal] = useState()


   const getusers = async () => {
      const response = await fetch("https://dummyjson.com/products")
      const item = await response.json();
      setProduct(item.products);
   }

   useEffect(() => {
      getusers();
   }, [])


   const Add = (id) => {
      console.log(id);
      let exist = cartdata.find(object => object.id === id)
      if (exist) {
         return toast.warn("Already in Cart");
      }
      else {
         let item = product.find(object => object.id === id);
         let data = [...cartdata]
         let newitem = { id: item.id, thumbnail: item.thumbnail, title: item.title, category: item.category, descripton: item.descripton, price: item.price, discountPercentage: item.discountPercentage, quantity: 1, amount: item.price }
         data.push(newitem);
         setCartdata(data);
         console.log(data);
         toast.success("Successfully Add to Cart");
      }
   }

   const Added = (element) => {
      let item = cartdata.find(object => object.id === element)
      if (item) {
         return toast.warn("Already in Cart");
      }

   }

   const RemoveData = (id) => {
      let index = cartdata.findIndex((object) => object.id === id);
      cartdata.splice(index, 1)
      setCartdata([...cartdata]);
      toast.success("Successfully Remove from Cart");
   }

   const handleChange = (e) => {
      setSearchInput(e.target.value);
   }

   return (
      <>
         <UserContext.Provider value={{ product, setProduct, setSearchInput, searchInput, Add, cartdata, setCartdata, RemoveData, total, setTotal, Added, handleChange }}>
            <Router />
            <ToastContainer />
         </UserContext.Provider>
      </>
   )
}

export default WebParent