import React from "react"
import '..//../styles/app.css'
import logo from '..//..//assets/img/logo.svg'
import flowerbig from '..//../assets/img/flowerbig.svg'
import flowersmall from '..//../assets/img/flowersmall.svg'
import search from '..//../assets/img//imgheader/search.svg'
import basket from '..//../assets/img//imgheader/basket.svg'


export default function HomePage (){

const headerMenu=[
    {id:1, title: 'Home'},
    {id:2, title: 'Shop'},
    {id:3, title: 'Plant Care'},
    {id:4, title: 'Blogs'},
]



return<div className="app">
        <div className="header-app">
            <img src={logo} alt="logo"/>
            <div className="header-center">
            {
                headerMenu.map((item)=><a key={item.id}>{item.title}</a>)
            }
            </div>
            <div className="header-r">
            <img src={search} alt="logo"/>
            <img src={basket} alt="logo"/>
            <button>Login</button>
            </div>
        </div>
        <div className="mainBaner">
            <div className="textbaner">
                <h4>Welcome to GreenShop</h4>
                <h1>Let’s Make a
                Better Planet</h1>
                <h5>We are an online plant shop offering a wide range of cheap and trendy plants. Use our plants to create an unique Urban Jungle. Order your favorite plants!</h5>
                <button className="btn-baner">SHOP NOW</button>
            </div>   
            <img src={flowerbig} alt="flowerbig" className="flowerbig"/>
            <img src={flowersmall} alt="flowersmall" className="flowersmall"/>
        </div>
        <div className="home-content">
            <div className="categories">
                <h3>Categories</h3>
            </div>
            <div className="products">

            </div>
        </div>
   
    <h1>Welcom</h1>
    </div>
}