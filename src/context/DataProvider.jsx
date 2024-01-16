import { createContext, useState } from 'react';

export const DataContext = createContext();

const DataProvider = ({children}) => {

    const [html, setHtml] = useState('');
    const [css, setCss] = useState('');
    const [js, setJavaScript] = useState('');


    return (
        <DataContext.Provider
           value={{
            html,
            setHtml,
            css,
            setCss,
            js,
            setJavaScript
           }}
        >
           {children}
        </DataContext.Provider>
    )
}

export default DataProvider;