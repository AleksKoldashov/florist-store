import React, { useEffect, useState } from "react";
import '../styles/app.css';
import search from '../assets/img//imgheader/search.svg';
import basket from '../assets/img//imgheader/basket.svg';
import logo from '..//assets/img/logo.svg';
import HomePage from "./Page/HomePage";
import { useQuery } from "react-query";
import { Spin } from 'antd';
import AdminPage from "./Page/AdminPage/AdminPage";
import { NavLink, Outlet, useNavigate } from "react-router-dom";

const headerMenu=[
    {id:1, title: 'Home', path:'/home'},
    {id:2, title: 'Shop', path:'/home'},
    {id:3, title: 'Plant Care',path:'/home'},
    {id:4, title: 'Blogs', path:'/admin'},
]

export default function App (){
const MyNavigate=useNavigate()

const {data, isLoading, isError}=useQuery({
    queryKey:['products'],
    queryFn: async () =>{
        const response = await fetch (`https://florist-project-78b45-default-rtdb.europe-west1.firebasedatabase.app/products.json`)
        return response.json()
    }
})

useEffect(()=>{
    MyNavigate('/home')
}, [])

return(
<div className="app">
        <div className="header-app">
            <img src={logo} alt="logo"/>
            <div className="header-center">
            {
                headerMenu.map((item)=><NavLink key={item.id} to={item.path}>{item.title}</NavLink>)
            }
            </div>
            <div className="header-r">
            <img src={search} alt="logo"/>
            <img src={basket} alt="logo"/>
            <button>Login</button>
            </div>
        </div>
    {/* <HomePage/> */}
    {/* <AdminPage/> */}
    <Outlet/>
    {/* {
      isLoading ? <Spin/>
      :
      isError  ? <p>error</p>
      :
      data
    } */}
  
</div>
)
}