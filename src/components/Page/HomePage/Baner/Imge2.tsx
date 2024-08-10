import React from 'react'
import flowerbig from '../../../../assets/img/flowerbig.svg'
import flowersmall from '../../../../assets/img/flowersmall.svg'
export default function Imge2() {
  return (
    <>
    <div 
       >
            <div className="textbaner1">
                <h4>Что реализованно?</h4>
                <h3>Реализованн фильр по товарам, есть авторизазия, существует страница админа сайти с возвожностью добавления, удаления, редактирования каталога товаров, 
                    корзина заказа и многое другое кликай смотри не стесняйся</h3>
            </div>   
            <img src={flowerbig} alt="flowerbig" className="flowerbig"/>
            <img src={flowersmall} alt="flowersmall" className="flowersmall"/>  
       </div>
    </>
  )
}
