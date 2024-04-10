import React from "react";
import { Select, Space } from 'antd';
import useWindowSize from "../../../utils/Hooks/useWindowsSize";

const SelectField = ({
                         handleChange,
                         defaultValue='',
                         options=[],
                         size='large',
                         width=150,
                         autoResponsive=true,
                         autoResponsiveWidth=520,
                         ...rest
                     }) =>{

    let windowSize = useWindowSize();

    return(
        <div>
            <Space wrap>
                <Select
                    size={autoResponsive ? windowSize.width < autoResponsiveWidth ? 'default' : size : size}
                    defaultValue={defaultValue}
                    style={{ width: autoResponsive ? windowSize.width < autoResponsiveWidth ? 90 : width : width }}
                    onChange={handleChange}
                    options={options}
                    {...rest}
                />
            </Space>
        </div>
    )
};

export default SelectField;