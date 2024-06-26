'use client';

import { StyleProvider, createCache, extractStyle } from '@ant-design/cssinjs';
import { useServerInsertedHTML } from 'next/navigation';
import React from 'react';

const StyledComponentsRegistry = ({ children }) => {
    const cache = React.useMemo(() => createCache(), []);
    useServerInsertedHTML(() => (
        <style id="antd" dangerouslySetInnerHTML={{ __html: extractStyle(cache, true) }} />
    ));
    return <StyleProvider cache={cache} hashPriority="low">{children}</StyleProvider>;
};

export default StyledComponentsRegistry;
