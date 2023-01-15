import { useContext } from 'react';

import List from '../components/List/List';
import {WordsContext} from '../context/WordsContext';
import Loader from '../components/Loader/Loader';

export default function Home() {

    const {context, setContext} = useContext(WordsContext);

    if (!context) {
        return <Loader />;
    }

    return <List data={context} />;
}