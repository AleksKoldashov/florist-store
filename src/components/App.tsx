import React, { useState } from "react"
import '../styles/app.css'
import HomePage from "./Page/HomePage"
import { useQuery } from "react-query"
import { Spin } from 'antd';


export default function App (){
const [value, setValue]=useState<any>()
const {data, isLoading, isError}=useQuery({
    queryKey:['products'],
    queryFn: async () =>{
        const response = await fetch (`https://florist-project-78b45-default-rtdb.europe-west1.firebasedatabase.app/products.json`)
        return response.json()
    }
})


const addfoto= async ()=>{
const formData = new FormData();
formData.append('flo', value)
const res = await fetch(`https://firebasestorage.googleapis.com/v0/b/florist-project-78b45.appspot.com/o/img%2Fflo`,{
    method:'POST',
    body: formData
});
const data = await res.json();
console.log(data);

    // //имя создаваемого файла
    // const storageRef = ref(storage, 'img/s1');
    // uploadBytes(storageRef, value).then((snapshot) => {
    // });
}
return(
<div className="app">
    {/* <HomePage/> */}
    {/* {
      isLoading ? <Spin/>
      :
      isError  ? <p>error</p>
      :
      data
    } */}
    gg
    <img src='https://firebasestorage.googleapis.com/v0/b/florist-project-78b45.appspot.com/o/flowe?alt=media&token=b62ec61e-590f-43d0-ac43-1beddb616259' alt="logo"/>
    <button onClick={()=>{addfoto()}}>Добавить фото</button>
    <input 
        type="file" 
        onChange={(e:any)=>{setValue(e.target.files[0])}} 
        aria-label="d"
        accept="image/*"
        />
</div>
)
}