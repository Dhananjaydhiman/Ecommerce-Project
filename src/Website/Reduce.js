// import { useContext } from 'react'
// import { UserContext } from './WebParent'

// const { setCartdata } = useContext(UserContext);

export const CartReducer = (state, action) => {
   switch (action.type) {
      case "Fetch_Data":
         return { ...state, product: action.payload }
      // case "Change_Cart_Qty":
      //    return {
      //       ...state,
      //       cart: state.cart.filter((c) =>
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

