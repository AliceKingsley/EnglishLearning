import { createContext, useState, useEffect } from 'react';
import GetServices from '../Services/GetServices';

export const WordsContext = createContext();

export const MyContextProvider = ({children}) => {
    const [context, setContext] = useState('');

    useEffect( () => {
        async function getWords() {
            const data = await GetServices.getData();
            setContext(data);
        }

        getWords();
    }, []);

    const values = {context, setContext};

    return (
        <WordsContext.Provider value={values}>
            {children}
        </WordsContext.Provider>
    );
};