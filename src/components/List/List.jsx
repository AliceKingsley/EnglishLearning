import React from 'react';
import { useState } from 'react';
import Item from '../Item/Item.jsx';

import './List.css';

export default function List(props) {
    let data = props.data;

    const [isEditable, setIsEditable] =useState(0);

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
                    {
                        data.map((elem, index) => {
                            return (
                                <Item 
                                    key={index} 
                                    number={index + 1} 
                                    english={elem.english} 
                                    russian={elem.russian} 
                                    transcription={elem.transcription} 
                                    tags={elem.tags} 
                                    isEditable={isEditable === index + 1} 
                                    onEditButtonClick={setIsEditable}
                                    onSaveButtonClick={setIsEditable}
                                    onCancelButtonClick={setIsEditable}
                                />
                            )
                        })
                    }
                </tbody>
            </table>
        </React.Fragment>
    );
}