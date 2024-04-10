import React, { useState } from 'react';
import { Table} from 'antd';
import styles from './Table.module.css';
import Pagination from "../Pagination";
import PrevToStartIcon from "../../../Assets/Icons/PrevToStartIcon";


const columns = [
    {
        title: 'Name',
        dataIndex: 'name',
    },
    {
        title: 'Age',
        dataIndex: 'age',
    },
    {
        title: 'Address',
        dataIndex: 'address',
    },
];
const data = [];
for (let i = 0; i < 46; i++) {
    data.push({
        // key: i,
        // name: `Edward King ${i}`,
        // age: 32,
        // address: `London, Park Lane no. ${i}`,
        no: `${i + 1}`,
        기존유형: `소득적격`,
        신청유형: `개인전문`,
        제출서류: `보기`,
        신청일시: `2023-01-10 09:00:00`,
        승인여부: `승인대기`,
        "승인거부 사유" : `서류 식별 불가 금융투자업자에 계좌를 개설한지 1년 미만으로 전문투자자 승인 불가`,
        승인일시: `2023-01-10 09:00:00`,
        관리자: `김관리자`,
    });
}

const AntdTable = ({
                       columns,
                       dataSource,
                       rowSelection,
                        ...rest
                   }) =>{



    const rowClassName = (record, index) => {
        return index % 2 !== 0 ? styles['even-row'] : ''; // Apply 'even-row' class to even index rows
    };

    return (
        <div className={styles.mainContainer}>
            <div className={styles.tableContainer}>
                <Table
                    rowSelection={rowSelection}
                    columns={columns}
                    dataSource={dataSource}
                    rowClassName={rowClassName}
                    pagination={{ position: ["none", "none",],pageSize:20 }}
                    scroll={{
                        x: 1200,
                        // y: 400,
                    }}
                    {...rest}
                />
            </div>
            <Pagination
                defaultCurrent={1} total={50}
            />
        </div>
    );};

export default AntdTable;