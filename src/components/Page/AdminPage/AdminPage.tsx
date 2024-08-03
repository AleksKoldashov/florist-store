import React, { useContext, useState } from "react";
import './index.css';
import { NavLink, Outlet } from "react-router-dom";
import { MyReduserContext } from "../../../components/Reducers/Reducer";

const menuAdmin = [
    {id:1, title: 'Список товаров', path: '/admin/listproducts'},
    {id:2, title: 'Добавить товар', path: '/admin/addproduct'},
    {id:3, title: 'Добавить категорию', path: '/admin/addcategories'},
]


export default function AdminPage (){

    const [value, setValue]=useState<any>()
    const addfoto= async ()=>{
        const formData = new FormData();
        formData.append('flo', value)
        const res = await fetch(`https://firebasestorage.googleapis.com/v0/b/florist-project-78b45.appspot.com/o/img%2Fflo`,{
            method:'POST',
            body: formData
        });
        const data = await res.json();
        }




return(
    <div className="admin">
        {/* <img src='https://firebasestorage.googleapis.com/v0/b/florist-project-78b45.appspot.com/o/flowe?alt=media&token=b62ec61e-590f-43d0-ac43-1beddb616259' alt="logo"/>
        <button onClick={()=>{addfoto()}}>Добавить фото</button>
        <input 
            type="file" 
            onChange={(e:any)=>{setValue(e.target.files[0])}} 
            aria-label="d"
            accept="image/*"
            /> */}
        <div className="sidebar-admin">
            {
                menuAdmin.map(item=>
                <NavLink 
                key={item.id} 
                to={item.path} 
                style={{marginTop:'10px', fontSize: '20px'}}
          
                >{item.title}</NavLink>)
            }
        </div>
        <div className="content-admin">
           <Outlet/>
        </div>       
    </div>
    )
}