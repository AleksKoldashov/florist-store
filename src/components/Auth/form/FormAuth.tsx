import React, { useState } from 'react'
import useMyInput from '../../Hooks/MyInput'
import Password from 'antd/es/input/Password';
import { Button, Form, Input } from 'antd';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from 'react-router-dom';
import MyMasseger from '../../Hooks/MyMasseger';

export default function FormAuth() {

// const [passwordVisible, setPasswordVisible] = React.useState(false);

const messager = MyMasseger({bodyS:'Success User', bodyE:'Fail User', bodyW:'Out in Admin'})

// localStorage.setItem('auth222', `${passwordVisible}`)

const [value, setValue]=useState({mail:'',pass:''});  

const funcAuth=()=>{
  if(value.mail==='admin@mail.ru'){
  localStorage.setItem('authAdmin', 'true') 
  localStorage.setItem('authUser', 'false')
  messager.warning()
  }else{
  localStorage.setItem('authAdmin', 'false')
  }
}   

const Login=()=>{
  const auth = getAuth();
  signInWithEmailAndPassword(auth, value.mail, value.pass)
  .then(({user})=>{
    localStorage.setItem('authUser', JSON.stringify(`${user.uid}`))
    messager.success()
  })
  .catch(()=>{
    messager.error()
  })
}
const styMail:React.CSSProperties={
  width:'300px',
  height:'40px',
  marginTop: '20px'
}
const styPass:React.CSSProperties={
  width:'300px',
  height:'40px',
  marginTop: '20px',
  
}
  return (
    <>
    {messager.contextHolder}
      <span>Enter your username and password to login.</span>
      <Form>
      <Form.Item
        name="email"
        // label="E-mail"
        rules={[
          {
            type: 'email',
            message: 'The input is not valid E-mail!',
          },
          {
            required: true,
            message: 'Please input your E-mail!',
          },
        ]}
      >
         <Input 
        style={styMail}
        placeholder='enter email'
        value={value.mail}
        onChange={(e:any)=>{setValue({...value, mail: e.target.value})}}
        />
         {/* { 
          mail.input(
            {
              placeholder: 'enter mail', 
              style: styMail, 
            })
        } */}
       
        
      </Form.Item>
      <Form.Item
        name="password"
        // label="Password"
        rules={[
          {
            required: true,
            message: 'Please input your password!',
          },
        ]}
        hasFeedback
      >
        <Input.Password 
        style={styPass}
        placeholder='enter password'
        value={value.pass}
        onChange={(e:any)=>{setValue({...value, pass: e.target.value})}}
        />
       {/* {
          pass.input(
            {
              placeholder: 'enter password', 
              style: styPass, 
              type: Password,
            })
        } */}
      </Form.Item>
         
      </Form>
        
        <a className='forg-pass'>Forgot Password?</a>
        <Button
        className='loginAuth'
        onClick={()=>{[Login(), funcAuth()]}}
        >Login</Button>
        <div className='foter'>
        <svg width="101" height="1" viewBox="0 0 101 1" fill="none" xmlns="http://www.w3.org/2000/svg">
        <line y1="0.5" x2="101" y2="0.5" stroke="#EAEAEA"/>
        </svg>
        <span>Or login with</span>
        <svg width="101" height="1" viewBox="0 0 101 1" fill="none" xmlns="http://www.w3.org/2000/svg">
        <line y1="0.5" x2="101" y2="0.5" stroke="#EAEAEA"/>
        </svg>
        </div>
        

    </>
  )
}
