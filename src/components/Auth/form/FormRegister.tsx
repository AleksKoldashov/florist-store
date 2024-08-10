import { Button, Form, Input } from 'antd'
import React, { useState } from 'react'
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { useMutation } from 'react-query';
import MyMasseger from '../../Hooks/MyMasseger';

const AddMyUser= async ({value, uid}:any) =>{
  const response = await fetch (`https://florist-project-78b45-default-rtdb.europe-west1.firebasedatabase.app/user/${uid}.json`,{
      method:'PUT',
      body: JSON.stringify({...value, uid})
  })
  if (!response.ok) {
      throw new Error('Что-то пошло не так');
    }
    return await response.json();
}


export default function FormRegister() {
  const message=MyMasseger({bodyS:'Success User', bodyE: 'Error register'})
  const [value, setValue]=useState({
    mail:'',
    pass:'',
    nickname:''
  })
  const sty:React.CSSProperties={
    width:'300px',
    height:'40px',
    marginLeft: '30px'

  }
  const styN:React.CSSProperties={
    width:'300px',
    height:'40px',
    marginTop: '10px',
    marginLeft: '30px'
  }

const onChangeNickName: React.ChangeEventHandler<HTMLInputElement>=(e)=>{
  setValue({...value, nickname:e.target.value})
  }
const onChangeMail: React.ChangeEventHandler<HTMLInputElement>=(e)=>{
  setValue({...value, mail:e.target.value})
}
const onChangePass: React.ChangeEventHandler<HTMLInputElement>=(e)=>{
  setValue({...value, pass:e.target.value})
}
console.log(value);
const addUser=useMutation({
  mutationFn: ({value, uid}:any):any=>{
    AddMyUser({value, uid})
  },
  onSuccess:()=>{
    message.success()
  }
})
const onSubmit=()=>{
  const auth = getAuth();
  createUserWithEmailAndPassword(auth, value.mail, value.pass)
      .then(({user})=>{
          addUser.mutate({value, uid: user.uid})
      })
      .catch(()=>{
        message.error()
        console.log('error');
      }
    )
}  
  return (
    <>
    {message.contextHolder}
    <span>Enter your username and password to register.</span>
    <Form
    >
      <Form.Item
        name="nickname"
        // label="Nickname"
        tooltip="What do you want others to call you?"
        rules={[{ required: true, message: 'Please input your nickname!', whitespace: true }]}
      >
      <Input 
      style={styN}
      placeholder='enter nickname'
      value={value.nickname}
      onChange={onChangeNickName}
      />
      </Form.Item>

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
        style={sty}
        placeholder='enter email'
        value={value.mail}
        onChange={onChangeMail}
        />
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
        style={sty}
        placeholder='enter password'
        value={value.pass}
        onChange={onChangePass}
        />
      </Form.Item>

      <Form.Item
        name="confirm"
        // label="Confirm Password"
        dependencies={['password']}
        hasFeedback
        rules={[
          {
            required: true,
            message: 'Please confirm your password!',
          },
          ({ getFieldValue }) => ({
            validator(_, value) {
              if (!value || getFieldValue('password') === value) {
                return Promise.resolve();
              }
              return Promise.reject(new Error('The new password that you entered do not match!'));
            },
          }),
        ]}
      >
        <Input.Password 
        style={sty}
        placeholder='reped password'
        />
      </Form.Item>
      <Button
        className='loginAuth'
        onClick={()=>{onSubmit()}}
        >Register</Button>
        <div className='foter'>
        <svg width="101" height="1" viewBox="0 0 101 1" fill="none" xmlns="http://www.w3.org/2000/svg">
        <line y1="0.5" x2="101" y2="0.5" stroke="#EAEAEA"/>
        </svg>
        <span>Or register with</span>
        <svg width="101" height="1" viewBox="0 0 101 1" fill="none" xmlns="http://www.w3.org/2000/svg">
        <line y1="0.5" x2="101" y2="0.5" stroke="#EAEAEA"/>
        </svg>
        </div>
    </Form>
    </>
  )
}
