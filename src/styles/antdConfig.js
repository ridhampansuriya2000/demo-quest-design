import { theme } from 'antd';
export const CONFIG_THEME = {
    hashed: false,
    algorithm: theme.compactAlgorithm,
    token: {
        colorPrimary: '#2A3958',
        headerBg: '#EEF0F4',
        // colorText: '#ffffff'
        // colorBorder: '#ffffff'
        // fontWeightStrong: 800
    },
    components: {
        Button: {
            defaultBorderColor: "#2A3958",
            defaultColor: "#2A3958",
            primaryShadow: "none",

        },
        Select:{
            // optionActiveBg:'',
            // optionPadding: '0px 0px'
            // paddingSM: '0px',
            // paddingXS: '0px',
            controlHeightLG:40,
            optionHeight:35,
            optionSelectedColor:'#fff',
            optionSelectedBg:'#2A3958',
            paddingXXS: '0px',
            // boxShadowSecondary:'none'
        },
        Table:{
            headerBg: '#EEF0F4',
            headerBorderRadius : 0,
            headerSplitColor: '#ffffff',
            rowSelectedBg:'#dbdbdb',
            rowSelectedHoverBg:'gray',
            fontWeightStrong:800,
            // stickyScrollBarBorderRadius:10,
            // tableLayout: 'fixed',
            // headerSplit: () => (
            //     <div style={{ backgroundColor: 'red', width:'1px', height: "20px" }}/>
            // ),
        },
        checkbox:{
            // fontSize: 19,
        },
        Pagination:{
            itemActiveBg:'#2A3958',
            itemActiveBgDisabled:'rgba(0, 0, 0, 0.15)',
            itemBg:'#ffffff',
            colorBgTextActive:'#ffffff',
                // borderRadius: 54,
            border:'1px transparent',
                // controlHeight: '2rem',
                fontSize: '1rem',
                colorBgContainer: '#A1A1A1',
                colorPrimary: '#A1A1A1',
                colorText: '#A1A1A1',
                colorPrimaryBorder: '#A1A1A1',
                // marginXS: 10,
        }
    },
}