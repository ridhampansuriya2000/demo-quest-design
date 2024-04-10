import "@/styles/globals.css";
import "antd/dist/reset.css";
import {CONFIG_THEME} from "../styles/antdConfig";
import {App, ConfigProvider} from 'antd';
import StyledComponentsRegistry from "../utils/AntdRegistary";

export default function Application({Component, pageProps}) {
    const getLayout = Component.getLayout || ((page) => <>{page}</>);
    return (
        <StyledComponentsRegistry>
            <ConfigProvider theme={CONFIG_THEME}>
                <App>
                    {getLayout(<Component {...pageProps} />)}
                </App>
            </ConfigProvider>
        </StyledComponentsRegistry>
    );
}
