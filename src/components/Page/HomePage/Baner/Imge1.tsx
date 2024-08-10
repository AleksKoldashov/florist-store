import React, { useState } from 'react'
import flowerbig from '../../../../assets/img/flowerbig.svg'
import flowersmall from '../../../../assets/img/flowersmall.svg'
import { useMutation, useQuery, useQueryClient } from 'react-query'
import { message } from 'antd'
import MyMasseger from '../../../Hooks/MyMasseger'
import Like from './Like'

export default function Imge1() {
 
const getLike:any = useQuery({
    queryKey:'like',
    queryFn:  async () =>{
        const response = await fetch (`https://florist-project-78b45-default-rtdb.europe-west1.firebasedatabase.app/like.json`)
        if (!response.ok) {
            throw new Error('Что-то пошло не так');
          }
          return await response.json();
    },
    enabled: true,
    // select: data=>data
  })

  if(getLike.isLoading)return<p>Loading...</p>
  if(getLike.isError)return<p>error...</p>
  return (
    <>
     <div 
       >
            <div className="textbaner1">
                <h4>Welcome to GreenShop</h4>
                <h1>Добрый день! Представляю проект выполненный на React</h1>
                <h5>В реализации проекта принимали участие: React JS, TypeScript JS, UI библиотека Ant Design of React, React Query, React Router Dom, FireBase</h5>
                <Like like={getLike.data}/>
            </div>
               
            <img src={flowerbig} alt="flowerbig" className="flowerbig1"/>
            <img src={flowersmall} alt="flowersmall" className="flowersmall1"/>  
       </div>
    </>
  )
}
