import React, {  createContext, useEffect, useState, } from "react";
import '../styles/app.css';
import search from '../assets/img//imgheader/search.svg';
import basket from '../assets/img//imgheader/basket.svg';
import logo from '..//assets/img/logo.svg';
import { useQuery} from "react-query";
import { Spin } from 'antd';
import { NavLink, Outlet, useNavigate } from "react-router-dom";
import { MyReduserContext, Product, reducer } from "../components/Reducers/Reducer";



const headerMenu=[
    {id:1, title: 'Home', path:'/home'},
    {id:2, title: 'Shop', path:'/home'},
    {id:3, title: 'Plant Care',path:'/home'},
    {id:4, title: 'Blogs', path:'/admin'},
]

export const MyAppContext = createContext(null)as any



export default function App (){
const MyNavigate=useNavigate()
const [state, dispatch] = React.useReducer(reducer, Product);
const categories =useQuery({
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



const products = useQuery({
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

console.log(state);

useEffect(()=>{
    MyNavigate('/home')
}, [])

if(categories.isLoading && products.isLoading)return <Spin/>
if(categories.error && products.error)return <p>error</p>
if(categories.data&&products.data){
    console.log(products.data);
    const categoriesArray:any=[]
    const productsArray=[]
    for(let key in categories.data){
        categoriesArray.push(key)
    }
    for(let key in products.data){
        productsArray.push(products.data[key])
    }

return(<>
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
                    <button>Login</button>
                    </div>
                </div>
            <Outlet/>
        </div>
    </MyAppContext.Provider>
</MyReduserContext.Provider>
</>
)}
}