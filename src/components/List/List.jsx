import React from 'react';
import { useState } from 'react';
import Item from '../Item/Item.jsx';

import './List.css';

export default function List(props) {
    let data = props.data;

    const [isEditable, setIsEditable] =useState(0);
    
    let items = [];
    for (let i = 0; i < data.length; i++) {
        const elem = data[i];
        items.push(<Item 
                        key={i} 
                        number={i + 1} 
                        english={elem.english} 
                        russian={elem.russian} 
                        transcription={elem.transcription} 
                        tags={elem.tags} 
                        isEditable={isEditable === i + 1} 
                        onEditButtonClick={setIsEditable}
                        onSaveButtonClick={setIsEditable}
                        onCancelButtonClick={setIsEditable}
                    />);
    }

    return (
        <React.Fragment>
            <table className='table'>
                <thead className='thead'>
                    <tr>
                        <th>&#35;</th>
                        <th>Английский</th>
                        <th>Русский</th>
                        <th>Транскрипция</th>
                        <th>Тема</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {items}
                </tbody>
            </table>
        </React.Fragment>
    );
}