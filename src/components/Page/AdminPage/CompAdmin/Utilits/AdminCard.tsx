import React, { useState } from "react"
import { Card, Button, Modal, ConfigProvider } from 'antd';
import '../../index.css'
import deleteimg from '../../../../../assets/img/delete.svg' 
export default function AdminCard ({...props}){
  const prod = props.props
  console.log(prod);
  
    const [isModalOpen, setIsModalOpen] = useState(false);

    const showModal = () => {
      setIsModalOpen(true);
    };
  
    const handleOk = () => {
      setIsModalOpen(false);
    };
  
    const handleCancel = () => {
      setIsModalOpen(false);
    };
  
    return ( 
        <>
        <Card style={{ width: 900 }}>
            <div className="admincard">
                <img 
                src={prod.urlimg} 
                alt="img"
                className="imgprod"
                />
                <h5>{prod.name}</h5>
                <span>{prod.quantily}</span>
                <span>{prod.price} $</span>
                <span>{prod.size}</span>
                <span>{prod.categories}</span>
                <button
                onClick={showModal}
                className="btnChange"
                >Change</button>
         
                
                <img src={deleteimg} alt="delete" className="imgdelete"/>
            </div>
        </Card>
        <Modal title="Basic Modal" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
            <p>Some contents...</p>
            <p>Some contents...</p>
            <p>Some contents...</p>
        </Modal>
        </>     
    )
}