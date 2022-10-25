import React from 'react';
import './Card.css';
import '../../styles.css';

export default function Card(props) {
// тестовая карточка

    return (
        <React.Fragment>
            <div className='card card_size'>
                <p>{props.data[0].english}</p>
                <p>{props.data[0].transcription}</p>
                <p>{props.data[0].russian}</p>
                <p>{props.data[0].tags}</p>
            </div>
        </React.Fragment>
    );
}