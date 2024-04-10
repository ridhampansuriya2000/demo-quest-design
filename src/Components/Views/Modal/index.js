import React from 'react';
import styles from './Modal.module.css';
import CloseBtnIcon from "../../../Assets/Icons/CloseBtnIcon";
import SuccessIcon from "../../../Assets/Icons/SuccessIcon";
import InfoIcon from "../../../Assets/Icons/InfoIcon";

const getStatusIcon = (status) =>{
    switch (status) {
        case 'success' : return <SuccessIcon />;
        case 'info' : return <InfoIcon />;
        default : return '';
    }
}

const Modal = ({ title='',body,onClose,closeBtn, hideCloseBtn=false, visible=false, hideDivider=false, footer,statusType,width }) =>{
    return(
        <>
            {visible ?
                <div className={styles.overlay} onClick={onClose}>
                    <div className={styles.modal} style={{width:width}} onClick={(e)=>e.stopPropagation()}>
                        <div className={styles.header}>
                            <span className={styles.title}>{getStatusIcon(statusType)}{title}</span>
                            {!hideCloseBtn &&
                            (closeBtn ?
                                <span onClick={onClose}>closeBtn</span>
                                : <button className={styles.closeButton} onClick={onClose}><CloseBtnIcon /></button>)}
                        </div>
                        {!hideDivider && <div className={styles.divider}/>}
                        <div className={styles.body}>
                            {body}
                        </div>
                        {!hideDivider && <div className={styles.divider}/>}
                        <div className={styles.footer}>
                            {footer}
                        </div>
                    </div>
                </div>
            : null}
        </>
    )
};

export default Modal;