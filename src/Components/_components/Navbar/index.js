import React from 'react';
import styles from './Navbar.module.css';

const Navbar = ({options,handleChange=()=>{},currentTab}) =>{
    return(
        <div className={styles.mainContainer}>
        <div className={styles.navContainer}>
            {options?.map((item, index) => (
                <div
                    key={index}
                    onClick={() => handleChange({ value: item?.value, index: index })}
                    className={`${styles.navItem} ${
                        currentTab === item?.value && styles.selectedNavItem
                    } ${
                        index === 0 && styles.firstSelectedItem
                    } ${
                        index === options.length - 1 && styles.lastSelectedItem
                    }`}
                >
                    {item?.label}
                </div>
            ))}
        </div>
        </div>
    )
};

export default Navbar;