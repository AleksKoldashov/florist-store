import React from 'react'
import flowerbig from '../../../../assets/img/flowerbig.svg'
import flowersmall from '../../../../assets/img/flowersmall.svg'

export default function Imge3() {
  return (
    <>
    <div 
       >
            <div className="textbaner1">
                <h4>Welcome to GreenShop</h4>
                <h1>Let’s Make a
                Better Planet</h1>
                <h5>We are an online plant shop offering a wide range of cheap and trendy plants. Use our plants to create an unique Urban Jungle. Order your favorite plants!</h5>
                <button className="btn-baner">SHOP NOW</button>
            </div>   
            <img src={flowerbig} alt="flowerbig" className="flowerbig"/>
            <img src={flowersmall} alt="flowersmall" className="flowersmall"/>  
       </div>
    </>
  )
}
