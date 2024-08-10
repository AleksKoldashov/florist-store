import React, { useState } from 'react'
import './pricerange.css'
import { ConfigProvider, Slider } from 'antd'


export default function PriceRange() {

const handelChange=(e:any)=>{
// console.log(e);

}
  return (
    <>  
    <ConfigProvider
    theme={{
      components: {
        Slider: {
          handleActiveColor: 'rgba(70, 163, 88, 1)',
          dotSize: 15,
          dotActiveBorderColor: 'rgba(70, 163, 88, 1)',
          dotBorderColor: 'white',
          trackBg: 'rgba(70, 163, 88, 1)',
          trackHoverBg:'rgba(70, 163, 88, 1)',
          handleColor: 'rgba(70, 163, 88, 1)',
          handleActiveOutlineColor: 'none',
          colorPrimaryBorderHover: 'rgba(70, 163, 88, 1)',
        },
      },
    }}
  >
   <Slider 
        range 
        defaultValue={[20, 50]}  
        onChange={handelChange}
        tooltip={
          {
            open: false
          }
        }
        />
  </ConfigProvider>
        
    </>
  )
}
