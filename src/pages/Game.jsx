import { useContext } from 'react';

import { WordsContext } from '../context/WordsContext';
import SliderCards from '../components/SliderCards/SliderCards';

export default function Game() {

    const {context, setContext} = useContext(WordsContext);

    if (!context) {
        return;
    }

    return <SliderCards data={context} />;
}