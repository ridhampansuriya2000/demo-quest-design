import React, { useState } from 'react';
import { Button as AntdButton } from 'antd';
import useWindowSize from "../../../utils/Hooks/useWindowsSize";

const Button = ({
                        size='large',
                        type="",
                        text='',
                        children,
                        width=150,
                        autoResponsive=true,
                        autoResponsiveWidth=820,
                        ...rest
                    }) =>{

    let windowSize = useWindowSize();

    return (
        <div>
            <AntdButton
                        type={type}
                        size={autoResponsive ? windowSize.width < autoResponsiveWidth ? 'default' : size : size}
                        style={{ width: autoResponsive ? windowSize.width < autoResponsiveWidth ? 90 : width : width }}
                        {...rest}
            >
                {children || text}
            </AntdButton>
        </div>
    );};

export default Button;