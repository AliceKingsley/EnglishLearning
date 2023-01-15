import { useContext } from 'react';

import { WordsContext } from '../context/WordsContext';
import SliderCards from '../components/SliderCards/SliderCards';
import Loader from '../components/Loader/Loader';

export default function Game() {

    const {context, setContext} = useContext(WordsContext);

    if (!context) {
        return <Loader />;
    }

    return <SliderCards data={context} />;
}