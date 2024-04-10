import React from 'react';
import { Pagination as AntdPagination} from 'antd';
import styles from './Pagination.module.css';
import PrevToStartIcon from "../../../Assets/Icons/PrevToStartIcon";
import PrevIcon from "../../../Assets/Icons/PrevIcon";
import NextIcon from "../../../Assets/Icons/NextIcon";
import NextToEndIcon from "../../../Assets/Icons/NextToEndIcon";


const Pagination = ({
                        defaultCurrent,
                        onChange=()=>{},
                        ...rest
                   }) =>{
    const [current,setCurrent] = React.useState(defaultCurrent);


    return (
        <div>
                <AntdPagination
                    itemRender={(value, type, defaultComponent)=>{
                        if (type === 'prev') {
                            return <a className={styles.prevIcons}><PrevToStartIcon /><PrevIcon /></a>;
                        }
                        if (type === 'next') {
                            return <a className={styles.nextIcons}><NextIcon /><NextToEndIcon /></a>;
                        }
                        return <div className={`${current === value ? styles.currentPageNumber : styles.pageNumber}`}>{value}</div>;
                    }}
                    onChange={(page, pageSize)=>{
                        setCurrent(page);
                        onChange(page, pageSize);
                    }}
                    {...rest}/>
        </div>
    );};

export default Pagination;