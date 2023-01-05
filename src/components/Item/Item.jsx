import React, { useState } from 'react';
import './Item.css';
import Button from '../Button/Button.jsx';
import Input from '../Input/Input';

export default function Item(props) {

    const {number, english, russian, transcription, tags, isEditable, onSaveButtonClick, onEditButtonClick, onCancelButtonClick, onDeleteButtonClick} = props;

    const [isDisabled, setIsDisabled] = useState(false);

    const [objError, setObjError] = useState({
        1: false,
        2: false,
        3: false,
        4: false
    });

    const onSave = (e) => {
        onSaveButtonClick(number);
        console.log('test_save');
    }

    const onEdit = (e) => {
        e.preventDefault();
        onEditButtonClick(number);
    }

    const onCancel = (e) => {
        onCancelButtonClick(number);
    }

    const onDataChange = (e, index, isError) => {
        let copyObj = {...objError};
        console.log('test_changeInput');
        console.log(index);
        console.log(isError);

        if (isError) {
            copyObj[index] = true;
            console.log(copyObj);
            setObjError(objError => ({
                ...copyObj
            }));
        } else {
            copyObj[index] = false;
            console.log(copyObj);
            setObjError(objError => ({
                ...copyObj
            }));
        }

        console.log(objError);

        const arr = Object.values(copyObj);

        for (const item of arr) {
            console.log(item);
            if (item) {
                setIsDisabled(true);
                return;
            } else {
                setIsDisabled(false);
            }
            
        }
    }

    return (
        <React.Fragment>
            <form action='#'>
                <div className='row'>
                    <div className='cell cell__number'>{number}</div>
                    <div className='cell'>{isEditable ? <Input index={1} onDataChange={onDataChange} value={english} /> : <div>{english}</div>}</div>
                    <div className='cell'>{isEditable ? <Input index={2} onDataChange={onDataChange} value={russian} /> : <div>{russian}</div>}</div>
                    <div className='cell'>{isEditable ? <Input index={3} onDataChange={onDataChange} value={transcription} /> : <div>{transcription}</div>}</div>
                    <div className='cell'>{isEditable ? <Input index={4} onDataChange={onDataChange} value={tags} /> : <div>{tags}</div>}</div>
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