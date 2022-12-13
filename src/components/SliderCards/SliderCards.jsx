import React from 'react';
import './SliderCards.css';
import '../../styles.css';
import Card from '../Card/Card';
import { useState } from 'react';
import {TiChevronLeftOutline, TiChevronRightOutline} from 'https://cdn.skypack.dev/react-icons/ti';

export default function SliderCards(props) {

    const { data, startIndex } = props;
    const start = startIndex || 0;

    const [index, setIndex] = useState(start);
    const [count, setCount] = useState(0);
    const [isPressed, setIsPressed] = useState(0);
    const [isRepeat, setIsRepeat] = useState(0);

    if (!data || data.length === 0) {
        return (<div>Не удалось загрузить слова. Попробуйте позже</div>
        );
    }

    const leftButtonClick = () => {
        setIndex( newCount => newCount - 1);
        if (isPressed) {
            setIsPressed(!isPressed);
        }
        if (isRepeat) {
            setIsRepeat(!isRepeat);
        }
    }

    const rightButtonClick = () => {
        setIndex( newIndex => newIndex + 1);
        if (isPressed) {
            setIsPressed(!isPressed);
        }
        if (isRepeat) {
            setIsRepeat(!isRepeat);
        }
    }

    const onChangeCount = () => {
        setCount( count => count + 1);
    }

    function onMainButtonClick() {
        setIsPressed(!isPressed);

        if (isRepeat) {
            return;
        }

        if (!isPressed) {
            onChangeCount();
            setIsRepeat(!isRepeat);
        }
    }

    return (
        <React.Fragment>
            {
                (index >= data.length || index < 0) ? "Конец игры" : (
                    <div className='slider'>
                        <button className='nav left' onClick={leftButtonClick}><TiChevronLeftOutline /></button>
                        <div>
                            <Card data={data[index]} onButtonClick={onMainButtonClick} isPressed={isPressed} />
                            <p>{index + 1}/{data.length}</p>
                        </div>
                        <button className='nav right' onClick={rightButtonClick}><TiChevronRightOutline /></button>
                    </div>
                )
            }
            <p>Изучено {count} слов</p>
        </React.Fragment>
    );
}
