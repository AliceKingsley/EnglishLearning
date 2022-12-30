import React from 'react';
import { useState } from 'react';
import Item from '../Item/Item.jsx';

import './List.css';

export default function List(props) {
    let data = props.data;

    const [isEditable, setIsEditable] =useState(0);

    return (
        <React.Fragment>
            <div className='table'>
                <div className='thead'>
                        <div>&#35;</div>
                        <div>Английский</div>
                        <div>Русский</div>
                        <div>Транскрипция</div>
                        <div>Тема</div>
                        <div></div>
                </div>
                <div>
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
                                    onDeleteButtonClick={setIsEditable}
                                />
                            )
                        })
                    }
                </div>
            </div>
        </React.Fragment>
    );
}