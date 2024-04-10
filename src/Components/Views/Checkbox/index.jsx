import React  from 'react';
import { Checkbox as AntdCheckbox } from 'antd';

const Checkbox = ({
                        text='',
                        children,
                        width=20,
                        autoResponsive=true,
                        ...rest
                    }) =>{


    return (
        <div>
            <AntdCheckbox
                        className='checkBox'
                        {...rest}
            >
                {children || text}
            </AntdCheckbox>
        </div>
    );};

export default Checkbox;