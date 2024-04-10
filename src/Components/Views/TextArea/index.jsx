import React  from 'react';
import styles from './TextArea.module.css';
import { Input  } from 'antd';
import useWindowSize from "../../../utils/Hooks/useWindowsSize";

const { TextArea } = Input;

const TextAreaInput = ({
                        size='large',
                        rows=4,
                        maxLength='',
                        type="",
                        text='',
                        children,
                        width='',
                        autoResponsive=true,
                        ...rest
                    }) =>{

    let windowSize = useWindowSize();

    return (
        <div>
            <TextArea
                className={styles.textarea}
                type={type}
                rows={rows}
                maxLength={maxLength}
                        // size={autoResponsive ? windowSize.width < 520 ? 'default' : size : size}
                        // style={{ width: autoResponsive ? windowSize.width < 520 ? 90 : width : width }}
                        {...rest}
            >
                {children || text}
            </TextArea >
        </div>
    );};

export default TextAreaInput;