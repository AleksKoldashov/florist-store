import React, { useContext, useEffect } from "react"
import '..//../styles/app.css'
import { MyAppContext } from "../App"
import QuantotyCategories from "../Page/HomePage/Categories/QuantotyCategories"
import '../Page/HomePage/index.css'
import { Outlet, useNavigate } from "react-router-dom"
import { MyReduserContext } from "../Reducers/Reducer"
import Baner from "./HomePage/Baner/Baner"
import '../Page/HomePage/index.css'
import AuthModal from "../Auth/AuthModal"
import PriceRange from "./HomePage/PriceRange/PriceRange"

export default function HomePage (){
const {categoriesArray, productsArray}:any = useContext(MyAppContext);
const {state, dispatch}= useContext<any>(MyReduserContext)

const nav = useNavigate()

useEffect(()=>{
    nav(`/home/products`)
},[state])

return<div className="app">
        
        <div className="mainBaner">
            <Baner/>
            <AuthModal/>
        </div>
        <div className="home-content">
            <div className="categories">
                <h3>Categories</h3>
                {
                    categoriesArray 
                    ?
                    <div className="categhome">
                    {
                        categoriesArray.map((item:any)=><QuantotyCategories item={{item, productsArray}} key={item}/>)
                    }    
                    </div>
                    :
                    <p>пусто</p>
                }
                {/* <PriceRange/> */}
            </div>
            <div className="products">               
               <Outlet/>
            </div>
        </div>
    </div>
}