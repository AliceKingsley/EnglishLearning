import React, { useState } from 'react';
import './Item.css';
import Button from '../Button/Button.jsx';
import Input from '../Input/Input';

export default function Item(props) {

    const {number, english, russian, transcription, tags, isEditable, onSaveButtonClick, onEditButtonClick, onCancelButtonClick, onDeleteButtonClick} = props;

    const [isDisabled, setIsDisabled] = useState(false);

    const onSave = (e) => {
        onSaveButtonClick(number);
        console.log('test_save');
    }

    const onEdit = (e) => {
        e.preventDefault();
        onEditButtonClick(number);
    }

    const onCancel = (e) => {
        e.preventDefault();
        onCancelButtonClick(number);
    }

    const onDataChange = () => {
        console.log('test_changeInput');
        setIsDisabled(true);
    }

    return (
        <React.Fragment>
            <form action='#'>
                <div className='row'>
                    <div className='cell cell__number'>{number}</div>
                    <div className='cell'>{isEditable ? <Input onDataChange={onDataChange} value={english} /> : <div>{english}</div>}</div>
                    <div className='cell'>{isEditable ? <Input onDataChange={onDataChange} value={russian} /> : <div>{russian}</div>}</div>
                    <div className='cell'>{isEditable ? <Input onDataChange={onDataChange} value={transcription} /> : <div>{transcription}</div>}</div>
                    <div className='cell'>{isEditable ? <Input onDataChange={onDataChange} value={tags} /> : <div>{tags}</div>}</div>
                    <div className='cell'>
                        {
                            isEditable ? <Button isEditable={isEditable} text="Сохранить" onButtonClick={onSave} disabled={isDisabled ? true: false} /> : <Button isEditable={isEditable} text="Редактировать" onButtonClick={onEdit} />
                        }
                        {
                            isEditable ? <Button isEditable={isEditable} text="Отменить" onButtonClick={onCancel} /> : <Button isEditable={isEditable} text="Удалить" onButtonClick={onDeleteButtonClick} />
                        }
                    </div>
                </div>
            </form>
        </React.Fragment>
    );
}