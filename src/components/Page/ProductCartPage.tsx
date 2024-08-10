import React, { useContext, useState } from 'react'
import '../Page/ProductCartPage/productcart.css'
import { Button, Card, ConfigProvider, Input, message } from 'antd'
import { MyReduserContext } from '../Reducers/Reducer'
import CardCart from './ProductCartPage/CardCart'
import { MutationFunction, ShouldDehydrateMutationFunction, useMutation } from 'react-query'
import MyMasseger from '../Hooks/MyMasseger'

const coupon = {id:1, name: 'SALE20%', sale: 20}
const AddMyOrder= async ({basket, uid, id}:any) =>{
  const response = await fetch (`https://florist-project-78b45-default-rtdb.europe-west1.firebasedatabase.app/user/${uid}/order/${id}.json`,{
      method:'PUT',
      body: JSON.stringify(basket)
  })
  if (!response.ok) {
      throw new Error('Что-то пошло не так');
    }
    return await response.json();
}


export default function ProductCartPage() {
  const cart =JSON.parse(localStorage.getItem('basket')as any)
  const {state, dispatch}= useContext<any>(MyReduserContext)
  const message = MyMasseger({bodyS:'Success order', bodyE: 'Error add order', bodyW: 'No Register'})
 const uid = JSON.parse(localStorage.getItem('authUser')as string)
 console.log( uid);
 
  const Subtotal=(arr:any)=>{
    let result = 0
  for(let key in arr){
    result = result + Number(arr[key].price)*arr[key].count
  }
  return result
  }
  const CouponDiscount=({num,number}:any)=>{
    if(number){
      if(isNaN(number)){
        return num*number/100
      }
        return num*Number(number)/100
    }
    return 0
  }
  const Shiping=(num:any)=>{
    return num*0.5/100
  }
  const Total=()=>{
    return Math.round(Subtotal(state.basket)-CouponDiscount({num:Subtotal(state.basket), number: coupon.sale })+Shiping(Subtotal(state.basket))) 
  }

  const AddOrder=useMutation({
    mutationFn: ():any=>{
      if(uid){
        const id = Math.floor(Math.random()*100000)   
        AddMyOrder({basket: state.basket, uid, id})
      }else{
        message.warning()
      }
    },
    onSuccess:()=>{
      if(uid){
        message.success()
        dispatch({type:'clearBasket'})
      }else{
        message.error()
      }
    },
    onError: ()=>{
      message.error()
    }
  })


  return (
    <ConfigProvider
  theme={{
    components: {
      Button: {
        defaultBg:'rgba(70, 163, 88, 1)',
        defaultColor: '#ffffff',
        defaultHoverBg: 'rgba(70, 163, 88, 1)',
        defaultHoverColor:'#ffffff'
      },
    },
  }}
>
  {message.contextHolder}
<div
    className='product-cart'
    >
      <div
      className='cart-content' 
      >
       <div className='cart-content-header'>
          <h3>Products</h3>
          <h3>Price</h3>
          <h3>Quantity</h3>
          <h3>Total</h3>
       </div>
       {state.basket.length > 0 ?
       <>
        {
        state.basket.map((item:any)=><CardCart item={item} key={item.id}/>)
       }
       </>
       :
      <div className="no-basket-product">
       <h1>No product</h1>
      </div>
      }
      </div>
      <div
      className='cart-total'
      >
        <h1 className="header-cart-total"></h1>
        <div className="coupon-modul">
          <h4>Coupon Apply</h4>
          <Input
          placeholder={coupon.name}
          defaultValue={coupon.name}
          style={{width:'250px'}}
          />
          <Button
          >Apply
          </Button>
        </div>
        <div className="result-total">
          <div>
            <h5>Subtotal</h5>
            <h5>Coupon Discount</h5>
            <h5>Shiping</h5>
            <h5>Total</h5>
          </div>
          <div>
            <h5>${Subtotal(state.basket)}</h5>
            <h5>${CouponDiscount({num:Subtotal(state.basket), number: coupon.sale })}</h5>
            <h5>${Shiping(Subtotal(state.basket))}</h5>
            <h5>${Total()}</h5>
          </div>
        </div>
        <Button
        style={{width:'330px'}}
        onClick={()=>{AddOrder.mutate()}}
        >Proceed To Checkout
        </Button>
      </div>
    </div>
</ConfigProvider>
   
  )
}
