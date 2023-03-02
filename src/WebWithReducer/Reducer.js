// import { useContext } from 'react'
// import { UserContext } from './WebParent'

// const { setCartdata } = useContext(UserContext);

export const Reducer = (state, action) => {
   switch (action.type) {
      case "Fetch_Data":
         return { ...state, product: action.payload }
      case "ADD_TO_CART":
         return {
            ...state,
            carts: [
               ...state.carts,
               { ...action.payload, qty: 1, subtotal: action.payload.price },
            ],
         };
      // case "Change_Cart_Qty":
      //    return {
      //       ...state,
      //       cartdata: state.cartdata.filter((c) =>
      //          c.id === action.payload.id ? (c.qty = action.payload.qty) : c.qty
      //       ),
      //    }
      // case "Remove_item":
      //    return {
      //       ...state,
      //       items: state.items.filter((currentElement) => {
      //          return currentElement.id !== action.payload;
      //          // setCartdata(items)
      //       })
      //    }




      // case "Change_Cart_Qty":
      //    return {
      //       ...state,
      //       state: state.filter((c) =>
      //          c.id === action.payload.id ? (c.qty = action.payload.qty) : c.qty
      //       ),
      //    }
      default:
         return state;
   }
}





















// export const CartReducer = (state, action) => {
//    switch (action.type) {
//       case "FETCH_PRODUCT":
//          return { ...state, products: action.payload };

//       case "ADD_TO_CART":
//          return {
//             ...state,
//             carts: [
//                ...state.carts,
//                { ...action.payload, qty: 1, subtotal: action.payload.price },
//             ],
//          };
//       case "REMOVE_FROM_CART":
//          return {
//             ...state,
//             carts: state.carts.filter((item) => item.id !== action.payload.id),
//          };
//       case "UPDATE_CART_QTY":
//          return {
//             ...state,
//             carts: state.carts.filter((c) =>
//                c.id === action.payload.id ? (c.qty = action.payload.qty) : c.qty
//             ),
//          };

//       default:
//          return state;
//    }
// };









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

