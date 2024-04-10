import React, { useState } from 'react';
import { Modal as AntdModal } from 'antd';
import Button from "../Button";
import styles from './Modal.module.css';

const Modal = ({
                   visible=false,
                       title='',
                       wrapClassName=``,
                       onOk=()=>{},
                       onCancel=()=>{},
                       body='',
                       ...rest
                    }) =>{

    return (
        <div>
            <AntdModal
                title={title}
                // style={{top: "calc(100vh - 100px)"}}
                wrapClassName={wrapClassName}
                visible={visible}
                onOk={onOk}
                onCancel={onCancel}
                {...rest}
            >
                {body}
            </AntdModal>
        </div>
    );};

export default Modal;