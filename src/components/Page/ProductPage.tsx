import React from 'react'
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom'
import './ProductPage/productpage.css'
import { Spin } from 'antd';
import Reviews from './ProductPage/Reviews';
import { InitStateProductPage, MyContextProdPage, reducerProdPage } from '../Reducers/ReducerProdPage';
import AddCart from './ProductPage/AddCart';


export default function ProductPage() {
    const {idProduct}=useParams()
   
  // localStorage.setItem('cart', `{}`)
//  const basket = localStorage.getItem('basket')
  // console.log(basket);

  const [stateProd, dispatchProd] = React.useReducer(reducerProdPage, InitStateProductPage);
    const product:any = useQuery({
        queryKey:['product'],
        queryFn:  async () =>{
            const response = await fetch (`https://florist-project-78b45-default-rtdb.europe-west1.firebasedatabase.app/products/id${idProduct}.json`)
            if (!response.ok) {
                throw new Error('Что-то пошло не так');
              }
              return await response.json();
        },
        enabled: true,
        // select: data=>data
    })
  if(product.isLoading)return <Spin
  size='large'
  className='spin-product'
  />  
  if(product.isError)return <div className='error-product'>Error:{product.error.message}</div>
  const item = product.data  
  return (<>
  <MyContextProdPage.Provider value={{dispatchProd, stateProd}}>
  <div
    className='product-page'
    >
    <div className='product-page-block1'>
    <img 
      src={item.urlimg} 
      alt='img'
      />
      <div className='product-page-desc'>
           <h1>{item.name}</h1>
           <div>
           <h2>$ {item.price}</h2>
           {/* Component Rating*/}
          </div>
          <svg width="573" height="1" viewBox="0 0 573 1" fill="none" xmlns="http://www.w3.org/2000/svg">
            <line x1="1.31134e-08" y1="0.85" x2="573" y2="0.85005" stroke="#46A358" strokeOpacity="0.5" strokeWidth="0.3"/>
          </svg>
          <h3>Short Description:</h3>
          <span className='product-page-desc-desc'>{item.description}</span>
          {/* <h3>Size:</h3> */}
          {/* Component Size*/}
          <AddCart item={item}/>
          <h4>SKU: {item.id}</h4>
          <h4>Categories: {item.categories}</h4>
      </div>
    </div>
     <div className='product-page-reviews'>
        <h4>Reviews ({stateProd.postlength})</h4>
        <Reviews item={item}/>
    </div> 
    </div>
  </MyContextProdPage.Provider>

  </>
   
    
  )
}
