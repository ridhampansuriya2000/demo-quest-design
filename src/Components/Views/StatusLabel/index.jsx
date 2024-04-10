import React, { useState } from 'react';
import styles from './StatusLabel.module.css';

const StatusLabel = ({
                        size='default',
                        type="success",
                        text="",
                        ...rest
                    }) =>{

    return (
        <>
            <div className={`${styles.label} ${styles[type]} `} {...rest}>
                {text}
            </div>
        </>
    );};

export default StatusLabel;