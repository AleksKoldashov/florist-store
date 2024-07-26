import React from "react"
import '..//../styles/app.css'
import flowerbig from '..//../assets/img/flowerbig.svg'
import flowersmall from '..//../assets/img/flowersmall.svg'



export default function HomePage (){


return<div className="app">    
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