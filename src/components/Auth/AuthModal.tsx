import React, { useContext, useState } from "react"
import './auth.css'
import { MyReduserContext } from "../Reducers/Reducer";
import FormAuth from "./form/FormAuth";
import FormRegister from "./form/FormRegister";
import { Button, ConfigProvider } from "antd";



export default function AuthModal() {
    const {state, dispatch}= useContext<any>(MyReduserContext)
     const [togle, setTogle]=useState(true)
  const stylBtnLogin: React.CSSProperties={
    color: togle ? 'rgba(70, 163, 88, 1' : ''
  }
  const stylBtnRegister: React.CSSProperties={
    color: togle ? '' : 'rgba(70, 163, 88, 1'
  }
     const close=()=>{
    dispatch({type:'modal', payload: false})
   } 
        return <>
        <ConfigProvider
       theme={{
        components: {
          Input: {
            activeBorderColor:'green',
            hoverBorderColor: 'green'
          },
          Button:{
            defaultActiveBorderColor: 'green',
            defaultActiveColor: 'green',
            defaultHoverBorderColor: 'green',
            defaultHoverColor:'green',
            // defaultHoverBg: 'green',

          }
        },
      }}
      >
        {
            state?.modal ?
            <>
            <div className="mymodal">
            <span className="close"
            onClick={()=>{close()}}
            >&times;</span>
              <div className="modal-body">
                  <div className="login-reg">
                    <Button 
                    className="btn-login"
                    onClick={()=>{setTogle(true)}}
                    style={stylBtnLogin}
                    >Login</Button>
                    |
                    <Button 
                    className="btn-reg"
                    style={stylBtnRegister}
                    onClick={()=>{setTogle(false)}}
                    >Register</Button>
                  </div>
                  <div className="wrapper-body">
                      {
                      togle ?
                      <FormAuth/>
                      :
                      <FormRegister/>
                      }
                  </div>
              </div>
            </div>
            <div className="appbaground"
            onClick={()=>{close()}}
            ></div>
            </>          
            :
            null
        }
        </ConfigProvider>
        </>

  }
    

