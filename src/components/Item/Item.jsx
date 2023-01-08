import React, { useState } from 'react';
import './Item.css';
import Button from '../Button/Button.jsx';
import Input from '../Input/Input';
import Modal from '../Modal/Modal';

export default function Item(props) {

    const {number, english, russian, transcription, tags, isEditable, onSaveButtonClick, onEditButtonClick, onCancelButtonClick, onDeleteButtonClick} = props;

    const [isDisabled, setIsDisabled] = useState(false);

    const [objError, setObjError] = useState({
        english: {
            value: english,
            isEmpty: false,
            withDigitError: ''
        },
        russian: {
            value: russian,
            isEmpty: false,
            withDigitError: ''
        },
        transcription: {
            value: transcription,
            isEmpty: false,
            withDigitError: ''
        },
        tags: {
            value: tags,
            isEmpty: false,
            withDigitError: ''
        },
    });

    const [error, setError] = useState('');

    const [isModal, setModal] = useState(false);
    const onClose = () => setModal(false);

    const onSave = (e) => {
        console.log('test_save');
        const formData = new FormData();
        e.preventDefault();
        let stock = '';
        
        const arr = Object.entries(objError);
        for (const item of arr) {
            if (item[1].withDigitError !== '') {
                stock += `${item[0]}: ${item[1].withDigitError} `;
            }
            formData.set(item[0], item[1].value);
        }
        setError(stock);

        if (stock !== '') {
            console.log('данные не отправлены');
            setModal(true);
            return;
        } else {
            console.log(`Данные формы для отправки: \n`);
            for (const key of formData.keys()) {
                console.log(`${key}: ${formData.get(key)}`);
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

        copyObj[index].value = e.target.value;
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
                <Modal
                    visible={isModal}
                    title='Ошибка'
                    content={<p>{error}</p>}
                    onClose={onClose}
                />
            </form>
        </React.Fragment>
    );
}