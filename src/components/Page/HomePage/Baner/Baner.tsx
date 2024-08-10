import React, { useEffect, useState } from 'react'
import './index.css'
import Imge1 from './Imge1'
import Imge2 from './Imge2'
import Imge3 from './Imge3'

export default function Baner() {
   const [togle, setTogle]=useState(
    {
        baner1: true, img1: "",
        baner2: false, img2: "0.3",
        baner3: false, img3: "0.3",
    }
) 

useEffect(()=>{
    setInterval(()=>{
       setTimeout(()=>{
        setTogle({baner1: false, baner2: true, baner3: false, img1:"0.3", img2: "",img3:"0.3"})
       },1000)
       setTimeout(()=>{
        setTogle({baner1: false, baner2: false, baner3: true, img1:"0.3", img2: "0.3",img3:""})
       },15000)
       setTimeout(()=>{
        setTogle({baner1: true, baner2: false, baner3: true, img1:"", img2: "0.3",img3:"0.3"})
       },30000)
    },45000)
},[])


    return (
        <>
        <div className='baner-content'>
            {
                togle.baner1 ?
                <Imge1/>
                :
                togle.baner2 ?
                <Imge2/>
                : 
                togle.baner3 ?
                <Imge3/>
                :
                null
            }
        </div>
        <div
            className='eclipse'
            >
            <svg width="12" height="12" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg"
            onClick={()=>{setTogle({baner1: true, baner2: false, baner3: true, img1:"", img2: "0.3",img3:"0.3"})}}
            >
                <circle cx="4" cy="4" r="4" fill="#46A358" fillOpacity={togle.img1}/>
            </svg>
            <svg width="12" height="12" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg"
             onClick={()=>{setTogle({baner1: false, baner2: true, baner3: false, img1:"0.3", img2: "",img3:"0.3"})}}
            >
                <circle cx="4" cy="4" r="4" fill="#46A358" fillOpacity={togle.img2}/>
            </svg>
            <svg width="12" height="12" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg"
             onClick={()=>{setTogle({baner1: false, baner2: false, baner3: true, img1:"0.3", img2: "0.3",img3:""})}}
            >
                <circle cx="4" cy="4" r="4" fill="#46A358" fillOpacity={togle.img3}/>
            </svg> 
        </div>

        </>
   
  )
}
