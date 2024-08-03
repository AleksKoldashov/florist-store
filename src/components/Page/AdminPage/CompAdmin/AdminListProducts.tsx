import React, { useContext } from "react"
import AdminCard from "./Utilits/AdminCard"
import { MyAppContext } from "../../../App";

const menuHeader=[
    {id:1, title: 'Name'},
    {id:2, title: 'Quantity'},
    {id:3, title: 'Price'},
    {id:4, title: 'Size'},
    {id:5, title: 'Categories'},
]

export default function AdminListProducts (){
    const {productsArray}:any = useContext(MyAppContext);

    return (
        <div>
           {
            productsArray.map((item:any)=><AdminCard props={item}/>)
           } 
        </div>
    )
}