import React from 'react';
import './Card.css';
import '../../styles.css';
import { useState } from 'react';

export default function Card(props) {
    const {english, transcription, russian, tags} = props.data;

    const [isPressed, setIsPressed] = useState(0);

    function onButtonClick() {
        setIsPressed(!isPressed);
    }

    return (
        <React.Fragment>
            <div className='card card_size'>
                <p>{english}</p>
                <p>{transcription}</p>
                {
                    isPressed ? <p onClick={onButtonClick}>{russian}</p> : <button className="card-button" onClick={onButtonClick}>Показать перевод</button>
                }
                <p>{tags}</p>
            </div>
        </React.Fragment>
    );
}