import React, { useContext } from 'react'
import { Card } from 'antd';

export default function CardProduct({...props}) {
    const item = props.item
  
    
  return (
    <>
    <Card key={item.id} style={{width:'200px', height: '300px',margin:'10px'}}>
                        <img src={`${item.urlimg}`} alt="img" style={{width:'150px',height:'150px'}}/>
                        <h3>{item.name}</h3>
                        <span>$ {item.price}</span>
    </Card>
    </>
  )
}
