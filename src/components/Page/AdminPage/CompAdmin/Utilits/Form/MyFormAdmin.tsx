import React, { useContext, useReducer, useState } from 'react';
import {
    Button,
    Form,
    Input,
    InputNumber,
    Select,
    Upload,
  } from 'antd';
import '../../../index.css'
import { Product, reducer, MyReduserContext } from '../../../../../Reducers/Reducer';
import useMyInput from '../../../../../../components/Hooks/MyInput';
import FormItem from 'antd/es/form/FormItem';
type IMyFormAdmin={
  categoriesArray: any;
  name?: string;
  categories?: string;
  price?: number;
  quantily?: number;
  description?: string;
  size?: string;
}

export default function MyFormAdmin ({...props}:IMyFormAdmin){
const categoriesArray = props.categoriesArray
const name = props.name 
const categories = props.categories
const price = props.price
const quantily = props.quantily
const description = props.description
const size = props.size
const {state, dispatch}= useContext<any>(MyReduserContext)


const categoriesOptions=(arr:any)=>{
  const newArr:any = []
  for(let key in arr){
    newArr.push({value: arr[key], label: arr[key]})
  }
  return newArr
}

const handelChangeName=(event:any)=>{
  dispatch({type:'name', payload: event.target.value});
 }
const handleChangeCategories = (value: string) => {
    dispatch({type:'categories', payload: value});
  };
const handelChangePrice=(event:any)=>{
    dispatch({type:'price', payload: event.target.value});
   }
const handelChangeQuantily=(event:any)=>{
    dispatch({type:'quantily', payload: event.target.value});
   }
const handelChangeDescription=(event:any)=>{
    dispatch({type:'description', payload: event.target.value});
   }
const handleChangeSize = (value: string) => {
    dispatch({type:'size', payload: value});
  }; 
const handleChangeImg = (value: any) => {
    dispatch(
      {type:'img',
       payload: `https://firebasestorage.googleapis.com/v0/b/florist-project-78b45.appspot.com/o/img%2${state?.name}?alt=media&token=b62ec61e-590f-43d0-ac43-1beddb616259`,
       payloadimg: value.target.files[0]});
  }; 

    return (   
        <>
    <Form
      labelCol={{ span: 4 }}
      wrapperCol={{ span: 14 }}
      layout="horizontal"
      style={{ maxWidth: 600 }}
    >
      <Form.Item label="Name Product">
        <Input 
        placeholder='Enter name product'
        // defaultValue={name}
        value={state?.name}
        onChange={handelChangeName}
        />
      </Form.Item>
      <Form.Item label="Categories">
        <Select
        // defaultValue={categories}
        onChange={handleChangeCategories}
        options={categoriesOptions(categoriesArray)}
        />
      </Form.Item>
      <Form.Item label="Price">
        <Input
         type='number' 
         placeholder='Enter price'
        //  defaultValue={price}
         value={state?.price}
         onChange={handelChangePrice}
        />
      </Form.Item>
      <Form.Item label="Quantily">
        <Input 
        type='number' 
        placeholder='Enter quantily'
        // defaultValue={quantily}
        value={state?.quantily}
        onChange={handelChangeQuantily}
        />
      </Form.Item>
      <Form.Item label="Description">
        <Input.TextArea
        placeholder='Enter description'
        // defaultValue={description}
        value={state?.description}
        onChange={handelChangeDescription}
        />
      </Form.Item>
      <Form.Item label="Size" >
        <Select 
        // defaultValue={size}
        onChange={handleChangeSize}
        >
          <Select.Option value="Small">Small</Select.Option>
          <Select.Option value="Medium">Medium</Select.Option>
          <Select.Option value="Large">Large</Select.Option>
        </Select>
      </Form.Item>
        <FormItem>
        <input 
            type="file" 
            onChange={handleChangeImg} 
            aria-label="d"
            accept="image/*"
          />
        </FormItem>
    </Form>
        </>
       
    )
}
 