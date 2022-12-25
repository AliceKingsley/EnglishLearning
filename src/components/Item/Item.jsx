import React from 'react';
import './Item.css';
import Button from '../Button/Button.jsx';
import Input from '../Input/Input';

export default function Item(props) {

    const {number, english, russian, transcription, tags, isEditable, onEditButtonClick,onCancelButtonClick} = props;

    const onSaveButtonClick = (e) => {
        console.log('test');
    }

    return (
        <React.Fragment>
            <form action='#'>
                <div className='row'>
                    <div className='cell cell__number'>{number}</div>
                    <div className='cell'>{isEditable ? <Input value={english} /> : <div>{english}</div>}</div>
                    <div className='cell'>{isEditable ? <Input value={russian} /> : <div>{russian}</div>}</div>
                    <div className='cell'>{isEditable ? <Input value={transcription} /> : <div>{transcription}</div>}</div>
                    <div className='cell'>{isEditable ? <Input value={tags} /> : <div>{tags}</div>}</div>
                    <div className='cell'>
                        {
                            isEditable ? <Button isEditable={isEditable} text="Сохранить" onButtonClick={onSaveButtonClick} number={number} /> : <Button isEditable={isEditable} text="Редактировать" onButtonClick={onEditButtonClick} number={number} />
                        }
                        {
                            isEditable ? <Button isEditable={isEditable} text="Отменить" onButtonClick={() => onCancelButtonClick((prev) => prev === number ? 0 : number)} number={number} /> : <Button isEditable={isEditable} text="Удалить" number={number} />
                        }
                    </div>
                </div>
            </form>
        </React.Fragment>
    );
}