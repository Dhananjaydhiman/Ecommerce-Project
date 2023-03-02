import React, { useContext, } from 'react'
import { UserContext } from './WebParent'
import { useEffect } from 'react';



const AddToCart = () => {
   const { cartdata, RemoveData, setCartdata, total, setTotal, searchInput } = useContext(UserContext);

   const filterCartdata = cartdata.filter((elem) => {
      if (searchInput === "") {
         return elem;
      }
      else {
         return elem.title.toLowerCase().includes(searchInput)
      }
   })


   // console.log(cartdata);

   const UpdateQuantity = (index, value) => {
      let cart = [...cartdata];
      let data = cart[index];
      data.quantity = value;
      data.amount = data.price * data.quantity;
      cart.splice(index, 1, data);

      setCartdata(cart, data);
      console.log(cartdata);
      // setTotal(cartdata.reduce((initial, current) => initial + current.amount, 0));

   }

   useEffect(() => {
      setTotal(cartdata.reduce((initial, current) => initial + current.amount, 0));
   }, [cartdata, setTotal]);


   return (
      <>
         <div style={{ border: "2px solid #a99999" }}>
            <h1 className='mt-5 text-center fw-bolder'>Shopping Cart</h1>
            <hr />
            <div className=' mt-4 rounded' style={{ border: "2px solid #a99999" }}>
               {filterCartdata?.map((element, index) => {
                  return (
                     <div className='d-block px-4 py-2' key={element.id}>
                        <div className='card mt-3 p-2' style={{ display: "-webkit-box" }}>
                           <div className='image w-40 m-1'>
                              <img src={element.thumbnail} className='round' alt='img' height="300px" width="500px" />
                           </div>
                           <div className='mt-3 mx-3 m-auto' style={{ width: "calc(100% - 500px)" }} >
                              <div>
                                 <div className='w-100 m-3'> <h1>{element.title}</h1></div>
                                 <div className='m-3'><h5>Category: {element.category}</h5><h6><b className='fs-5'>Description </b>: {element.description}</h6></div>
                              </div>
                              <div className='d-flex'>
                                 <div className='p-4 mt-4'>
                                    <button className='btn btn-outline-dark p-2 mx-2 px-2' onClick={() => { RemoveData(element.id) }}> <i className='fa fa-trash'></i> &nbsp;Remove </button>
                                 </div>
                                 <div className='m-auto  '>
                                    <div className='w-40  rounded p-1 m-1'>
                                       <b><span className='fs-3' >Price: ${element.price}</span></b>
                                    </div>
                                    <div className='m-3'>
                                       <button className='m-2' > {element.discountPercentage}% off</button></div>
                                 </div>
                                 <div className='m-auto d-flex'>
                                    <div>
                                       <h2>Quantity :
                                          <span className='mt-2 m-2 fs-4'>
                                             <select className='px-3 p-1 rounded' onChange={(e) => UpdateQuantity(index, e.target.value)}>
                                                <option value="1">1</option>
                                                <option value="2">2</option>
                                                <option value="3">3</option>
                                                <option value="4">4</option>
                                                <option value="5">5</option>
                                             </select></span>
                                       </h2>
                                       <div className='mt-3'>
                                          <h2>Subtotal : ${element.amount} </h2>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>

                  )
               })}
               {cartdata.length > 0 ? (<div className='card mx-4' ><h2 style={{ textAlign: "right", margin: "16px 4rem" }}>Total Amount: ${total} </h2></div>) : (<div>
                  <h2 className='text-center'> Your Cart is Empty </h2></div>)}
            </div>
         </div>
      </>
   )
}

export default AddToCart








// import React from 'react'
// import { useReducer } from 'react'

// const AddToCart = () => {

//    const initialstate = 0;
//    const reducer = (state, action) => {
//       // console.log(state, action);
//       if (action.type === "increment") {
//          return state + 1;
//       }
//       if (action.type === "decrement") {
//          return state - 1;
//       }
//       return state;
//    }

//    const [state, dispatch] = useReducer(reducer, initialstate);

//    return (
//       <>
//          <div>
//             {/* <p>{count}</p> */}
//             <p>{state}</p>
//             <div>
//                <button onClick={() => dispatch({ type: "decrement" })}>-</button>
//                <button onClick={() => dispatch({ type: "increment" })}>+</button>
//             </div>
//          </div>
//       </>
//    )
// }

// export default AddToCart

