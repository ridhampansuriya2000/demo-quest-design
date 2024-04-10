import React, { useState } from 'react';
import { ConfigProvider, Pagination as AntdPagination} from 'antd';
import styles from './Pagination.module.css';


const Pagination = ({
                       columns,
                       dataSource,
                       rowSelection,
                   }) =>{



    return (
        <div>
            <ConfigProvider theme={{
                token: {
                    colorBorder:'#0800d9',
                    colorPrimaryBorder:'#4e1ad9',
                //     colorPrimary: '#2A3958',
                //     // headerBg: '#EEF0F4',
                //     // fontWeightStrong: 800
                },
            }}>
                <AntdPagination defaultCurrent={1} total={50} />
            </ConfigProvider>
        </div>
    );};

export default Pagination;