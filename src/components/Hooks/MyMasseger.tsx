import React from 'react'
import { Button, message, Space } from 'antd';
type iMyMessager={
    bodyS?:string;
    bodyE?:string;
    bodyW?:string;
}
export default function MyMasseger({...props}:iMyMessager) {
    const [messageApi, contextHolder] = message.useMessage();

    const success = () => {
      messageApi.open({
        type: 'success',
        content: `${props.bodyS}`,
      });
    };
  
    const error = () => {
      messageApi.open({
        type: 'error',
        content: `${props.bodyE}`,
      });
    };
  
    const warning = () => {
      messageApi.open({
        type: 'warning',
        content: `${props.bodyW}`,
      });
    };
  
    return {contextHolder, success, error, warning}
       
     
   
}
