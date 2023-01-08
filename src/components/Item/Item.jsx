import React, { useState } from 'react';
import './Item.css';
import Button from '../Button/Button.jsx';
import Input from '../Input/Input';

export default function Item(props) {

    const {number, english, russian, transcription, tags, isEditable, onSaveButtonClick, onEditButtonClick, onCancelButtonClick, onDeleteButtonClick} = props;
    let error = '';

    const [isDisabled, setIsDisabled] = useState(false);

    const [objError, setObjError] = useState({
        english: {
            isEmpty: false,
            withDigitError: ''
        },
        russian: {
            isEmpty: false,
            withDigitError: ''
        },
        transcription: {
            isEmpty: false,
            withDwithDigitErrorigit: ''
        },
        tags: {
            isEmpty: false,
            withDigitError: ''
        },
    });

    const onSave = (e) => {
        console.log('test_save');
        
        const arr = Object.entries(objError);
        for (const item of arr) {
            if (item[1].withDigitError !== '') {
                error += `${item[0]}: ${item[1].withDigitError} `;
                console.log(error);
            }
            
        }

        onSaveButtonClick(number);
    }

    const onEdit = (e) => {
        e.preventDefault();
        onEditButtonClick(number);
    }

    const onCancel = (e) => {
        onCancelButtonClick(number);
    }

    const onDataChange = (e, index, isError, errorText) => {
        let copyObj = {...objError};
        console.log('test_changeInput');
        console.log(index);
        console.log(isError);
        console.log(errorText);

        copyObj[index].isEmpty = isError;
        copyObj[index].withDigitError = errorText;
        console.log(copyObj);
        setObjError(objError => ({
            ...copyObj
        }));

        console.log(objError);

        const arr = Object.values(copyObj);

        for (const item of arr) {
            if (item.isEmpty) {
                setIsDisabled(true);
                return;
            } 
            setIsDisabled(false);
        }
    }

    return (
        <React.Fragment>
            <form action='#'>
                <div className='row'>
                    <div className='cell cell__number'>{number}</div>
                    <div className='cell'>{isEditable ? <Input index={'english'} onDataChange={onDataChange} value={english} /> : <div>{english}</div>}</div>
                    <div className='cell'>{isEditable ? <Input index={'russian'} onDataChange={onDataChange} value={russian} /> : <div>{russian}</div>}</div>
                    <div className='cell'>{isEditable ? <Input index={'transcription'} onDataChange={onDataChange} value={transcription} /> : <div>{transcription}</div>}</div>
                    <div className='cell'>{isEditable ? <Input index={'tags'} onDataChange={onDataChange} value={tags} /> : <div>{tags}</div>}</div>
                    <div className='cell'>
                        {
                            isEditable ? <Button isEditable={isEditable} text="Сохранить" onButtonClick={onSave} disabled={isDisabled ? true: false} /> : <Button isEditable={isEditable} text="Редактировать" onButtonClick={onEdit} />
                        }
                        {
                            isEditable ? <Button isEditable={isEditable} text="Отменить" onButtonClick={onCancel} /> : <Button isEditable={isEditable} text="Удалить" onButtonClick={onDeleteButtonClick} />
                        }
                    </div>
                </div>
                <span>{error}</span>
            </form>
        </React.Fragment>
    );
}