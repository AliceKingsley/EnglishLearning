import SliderCards from '../components/SliderCards/SliderCards';

import dataArr from '../data';

export default function Game() {
    return <SliderCards data={dataArr} startIndex={0} />;
}