import React from 'react';
import './Card.css';
import '../../styles.css';
import {useEffect, useRef } from 'react';

export default function Card(props) {
    const {english, transcription, russian, tags} = props.data;
    const {isPressed, onButtonClick} = props;

    
    

    const ref = useRef();

    useEffect(() => ref.current?.focus());


    // function onButtonClick() {
    //     setIsPressed(!isPressed);

    //     if (isRepeat) {
    //         return;
    //     }
        
    //     if (!isPressed) {
    //         onChangeCount();
    //         setIsRepeat(!isRepeat);
    //     }
        
    // }

    return (
        <React.Fragment>
            <div className='card card_size'>
                <p>{english}</p>
                <p>{transcription}</p>
                {
                    isPressed ? <p onClick={onButtonClick}>{russian}</p> : <button className="card-button" onClick={onButtonClick} ref={ref}>Показать перевод</button>
                }
                <p>{tags}</p>
            </div>
        </React.Fragment>
    );
}