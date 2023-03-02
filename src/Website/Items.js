import React, { useContext } from 'react'
import { UserContext } from './WebParent'

const Items = () => {
   const { product, Add, Added, cartdata, searchInput } = useContext(UserContext)
   // const product = users.products;
   console.log(product);

   const filterProduct = product.filter((elem) => {
      if (searchInput === "") {
         return elem;
      }
      else {
         return elem.title.toLowerCase().includes(searchInput)
      }
   })




   return (
      <>
         <div id='itembox' >
            <h2 className='text-center mt-3'>Brand New Collection of  Items</h2>
            <div className='container-fluid'>
               <div className='row text-center '>


                  {filterProduct.map((element) => {
                     return (
                        <div className='col-10 col-md-4 mt-3 m-auto' key={element.id}>
                           <div className='card p-2'>
                              <div className=' image '>
                                 <img src={element.thumbnail} className='round w-100 img' alt='img' />
                              </div>
                              <div className='mt-3 mx-3' style={{ textAlign: "left" }}>
                                 <div className=' w-100'> <h4>{element.title}</h4> </div>
                                 <div className='d-flex pds'>
                                    <div className=' rounded price '>
                                       <b><span className='fs-3' >Price: ${element.price}</span></b>
                                    </div>
                                    <div className='discount'>
                                       <button className='mt-2 mx-1 ' > {element.discountPercentage}% off</button></div>
                                    <div className='mt-2 stock '>
                                       <span >Stock: {element.stock}</span>
                                    </div>
                                 </div>

                                 <div className='mt-2' >
                                    {
                                       cartdata.some((item) => item.id === element.id)
                                          ? (<button className='bg-secondary rounded py-2 w-100 text-center ' onClick={() => { Added(element.id) }}>Added to Cart</button>) :
                                          (<button className='bg-warning rounded py-2 w-100 text-center ' onClick={() => { Add(element.id) }}>Add to Cart</button>)
                                    }

                                 </div>
                              </div>
                           </div>
                        </div>
                     )
                  })}

               </div>
            </div>
         </div>
      </>
   )
}

export default Items



// if (searchInput.length > 0) {
//    product.filter((item) => {
//       return item.title.match(searchInput);
//    })
// }