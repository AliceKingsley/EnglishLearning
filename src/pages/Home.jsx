import { useContext } from 'react';

import List from '../components/List/List';
import {WordsContext} from '../context/WordsContext';

export default function Home() {

    const {context, setContext} = useContext(WordsContext);

    if (!context) {
        return;
    }

    return <List data={context} />;
}