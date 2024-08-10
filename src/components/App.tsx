import React, {  createContext, useEffect, useState, } from "react";
import '../styles/app.css';
import search from '../assets/img//imgheader/search.svg';
import basket from '../assets/img//imgheader/basket.svg';
import logo from '..//assets/img/logo.svg';
import location from '../assets/img/foter/loacation.svg'
import messeger from '../assets/img/foter/messeger.svg'
import calling from '../assets/img/foter/calling.svg'
import { useQuery} from "react-query";
import { ConfigProvider, Spin } from 'antd';
import { NavLink, Outlet, useNavigate } from "react-router-dom";
import { Product, MyReduserContext, reducer } from "../components/Reducers/Reducer";

const headerMenu=[
    {id:1, title: 'Home', path:'/home'},
    {id:2, title: 'Shop', path:'/productcart'},
    {id:3, title: 'Plant Care',path:'/home'},
    {id:4, title: 'Blogs', path:'/home'},
]

export const MyAppContext = createContext(null)as any

export default function App (){
const MyNavigate=useNavigate()
const [state, dispatch] = React.useReducer(reducer, Product);

const categories:any =useQuery({
    queryKey:['categories'],
    // queryFn: ()=>
    // axios
    // .get(`https://florist-project-78b45-default-rtdb.europe-west1.firebasedatabase.app/categories.json`)
    // .then((x)=>x.data),
    queryFn:  async () =>{
        const response = await fetch (`https://florist-project-78b45-default-rtdb.europe-west1.firebasedatabase.app/categories.json`)
        if (!response.ok) {
            throw new Error('Что-то пошло не так');
          }
      
          return await response.json();
    },
    enabled: true,
    // select: data=>data
})


localStorage.setItem('basket', JSON.stringify(state.basket))
localStorage.setItem('order', JSON.stringify(state.order))



const AuthUser = JSON.parse(localStorage.getItem('authUser')as any)
const AuthAdmin = JSON.parse(localStorage.getItem('authAdmin')as any)


const products:any = useQuery({
    queryKey:['products'],
    queryFn:  async () =>{
        const response = await fetch (`https://florist-project-78b45-default-rtdb.europe-west1.firebasedatabase.app/products.json`)
        if (!response.ok) {
            throw new Error('Что-то пошло не так');
          }
          return await response.json();
    },
    enabled: true,
    // select: data=>data
})


useEffect(()=>{
    MyNavigate('/home')
}, [])

if(categories.isLoading && products.isLoading)return <Spin/>
if(categories.isError && products.isError)return <p>Error: {categories.error.message}{products.error.message}</p>
if(categories.data&&products.data){
    const categoriesArray:any=[]
    const productsArray=[]
    for(let key in categories.data){
        categoriesArray.push(key)
    }
    for(let key in products.data){
        productsArray.push(products.data[key])
    }

return(<>
<ConfigProvider
  theme={{
    token: {
        colorPrimary: 'rgba(70, 163, 88, 1)',
        // colorBgContainer: 'rgba(70, 163, 88, 1)'
    },
  }}
>
<MyReduserContext.Provider value={{dispatch, state}}>
    <MyAppContext.Provider value={{categoriesArray, productsArray}}>
        <div className="app">
                <div className="header-app">
                    <img src={logo} alt="logo"/>
                    <div className="header-center">
                    {
                        headerMenu.map((item)=>
                        <NavLink 
                        key={item.id} 
                        to={item.path}
                        onClick={()=>dispatch({type:'test'})}
                        >
                            {item.title}
                            </NavLink>)
                    }
                    </div>
                    <div className="header-r">
                    <img src={search} alt="logo"/>
                    <img src={basket} alt="logo"/>
                    {
                       AuthUser.length > 0 ?
                        <NavLink to={`/account/${AuthUser}`}
                         className="app-btn-login-link"
                        >
                        <div>
                        User  
                        </div>    
                        </NavLink>
                        :
                        AuthAdmin ? 
                        <NavLink to='/admin'
                        className="app-btn-login-link"
                        >
                        <div>
                        Admin  
                       </div>    
                       </NavLink>
                        :
                        <button
                        className="app-btn-login"
                        onClick={()=>{dispatch({type: 'modal', payload: true})}}
                        >
                        Login
                        </button>
                    }

                    </div>
                </div>
            <Outlet/>
                <div className="foter-app">
                <img src={logo} alt="logo"/>
                <div className="foter-item">
                <img src={location} alt="logo"/>
                <span>70 West Buckingham Ave. Farmingdale, NY 11735</span>
                </div>
                <div className="foter-item">
                <img src={messeger} alt="logo"/>
                <span>contact@greenshop.com</span>
                </div>
                <div className="foter-item">
                <img src={calling} alt="logo"/>
                <span>+88 01911 717 490</span>
                </div>
                </div>
        </div>
    </MyAppContext.Provider>
</MyReduserContext.Provider>
</ConfigProvider>

</>
)}
}

