import React from 'react';
import './Item.css';
import Button from '../Button/Button.jsx';
import Input from '../Input/Input';

export default function Item(props) {

    const {number, english, russian, transcription, tags, isEditable, onSaveButtonClick, onEditButtonClick, onCancelButtonClick, onDeleteButtonClick} = props;

    const onSave = (e) => {
        onSaveButtonClick(number);
        console.log('test_save');
    }

    const onEdit = (e) => {
        e.preventDefault();
        onEditButtonClick(number);
    }

    const onDataChange = () => {

    }

    return (
        <React.Fragment>
            <form action='#'>
                <div className='row'>
                    <div className='cell cell__number'>{number}</div>
                    <div className='cell'>{isEditable ? <Input onChange={onDataChange} value={english} /> : <div>{english}</div>}</div>
                    <div className='cell'>{isEditable ? <Input value={russian} /> : <div>{russian}</div>}</div>
                    <div className='cell'>{isEditable ? <Input value={transcription} /> : <div>{transcription}</div>}</div>
                    <div className='cell'>{isEditable ? <Input value={tags} /> : <div>{tags}</div>}</div>
                    <div className='cell'>
                        {
                            isEditable ? <Button isEditable={isEditable} text="Сохранить" onButtonClick={onSave} /> : <Button isEditable={isEditable} text="Редактировать" onButtonClick={onEdit} />
                        }
                        {
                            isEditable ? <Button isEditable={isEditable} text="Отменить" onButtonClick={onCancelButtonClick} /> : <Button isEditable={isEditable} text="Удалить" onButtonClick={onDeleteButtonClick} />
                        }
                    </div>
                </div>
            </form>
        </React.Fragment>
    );
}