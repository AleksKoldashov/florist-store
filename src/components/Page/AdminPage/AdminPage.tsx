import React, { useState } from "react";
import './index.css';



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

        </div>
        <div className="content-admin">
            <h1>dfdsf</h1>
        </div>       
    </div>
    )
}