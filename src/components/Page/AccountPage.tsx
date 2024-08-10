import React, { useContext } from 'react'
import './AccountPage/account.css'
import { NavLink, Outlet, useNavigate } from 'react-router-dom'
import logout from '../../assets/img/logout.svg'
import { MyReduserContext } from '../Reducers/Reducer'

export default function AccountPage() {
  const nav=useNavigate()
  const {state, dispatch}= useContext<any>(MyReduserContext)
  const menuAdmin = [
    {id:1, title: 'Account Details', path: '/admin/listproducts'},
    {id:2, title: 'Address', path: '/admin/addproduct'},
    {id:3, title: 'Orders', path: '/admin/addcategories'},
    {id:4, title: 'Wishlist', path: '/admin/listproducts'},
    {id:5, title: 'Reports', path: '/admin/addproduct'},
    {id:6, title: 'Downloads', path: '/admin/addcategories'},
    {id:6, title: 'Support', path: '/admin/addcategories'},
]
 const clearlocal=()=>{
  dispatch({type:'clearBasket'})
  localStorage.setItem('authUser', 'false')
  nav('/home')
 } 
// Account Details Address Orders Wishlist Reports Downloads Support
  return (
    <div className='account'>
      <div className="sidebar-account">
        <h2>My Account</h2>
            {
                menuAdmin.map(item=>
                <NavLink 
                key={item.id} 
                to={item.path}
                className='account-item' 
                style={{marginBottom:'10px', fontSize: '20px'}}
          
                >{item.title}</NavLink>)
            }
          <svg width="307" height="1" viewBox="0 0 307 1" fill="none" xmlns="http://www.w3.org/2000/svg">
          <line y1="0.85" x2="307" y2="0.85" stroke="#46A358" stroke-opacity="0.5" stroke-width="0.3"/>
          </svg>
          <img 
          className='logout'
          alt='logout' 
          src={logout} 
          onClick={()=>{clearlocal()}}
          />
        </div>
        <div className="content-account">
           <Outlet/>
        </div>  
    </div>
  )
}
