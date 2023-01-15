import React, { useState } from 'react';
import './Item.css';
import Button from '../Button/Button.jsx';
import Input from '../Input/Input';
import Modal from '../Modal/Modal';
import PostServices from '../../Services/PostServices';
import GetServices from '../../Services/GetServices';

export default function Item(props) {

    const {number, english, russian, transcription, tags, id, isEditable, onSaveButtonClick, onEditButtonClick, onCancelButtonClick, onDeleteButtonClick} = props;

    const [isDisabled, setIsDisabled] = useState(false);

    const [saved, setIsSaved] = useState({});

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

    async function deleteWord(id, form) {
        const data = await PostServices.deleteData(id, form);
    }

    async function changeWord(id, form) {
        const data = await PostServices.changeData(id, form);
    }

    async function getWord(id) {
        const data = await GetServices.getDataById(id);
    }

    const onSave = (e) => {
        e.preventDefault();
        console.log('test_save');
        let objData = {
            id: '',
            english: '',
            russian: '',
            transcription: '',
            tags: ''
        };
        
        let stock = '';
        
        const arr = Object.entries(objError);
        for (const item of arr) {
            if (item[1].withDigitError !== '') {
                stock += `${item[0]}: ${item[1].withDigitError} `;
            }
            objData[item[0]] = item[1].value;
        }
        setError(stock);

        if (stock !== '') {
            console.log('данные не отправлены');
            setModal(true);
            return;
        } else {
            objData.id = id;
            console.log(JSON.stringify(objData));
            changeWord(id, JSON.stringify(objData));
            setIsSaved(getWord(id)); // какая-то проблема с ответом
        }

        onSaveButtonClick(false);
    }

    const onEdit = (e) => {
        e.preventDefault();
        console.log('test_change');
        onEditButtonClick(number);
    }

    const onCancel = (e) => {
        e.preventDefault();
        onCancelButtonClick(false);
    }

    const onDelete = (e) => {
        e.preventDefault();
        console.log('test_delete');
        let objData = {
            id: '',
            english: '',
            russian: '',
            transcription: '',
            tags: ''
        };
        console.log('id', id);
        objData.id = id;
        console.log(JSON.stringify(objData));
        // deleteWord(id, JSON.stringify(objData));
        onDeleteButtonClick(false);
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
                            isEditable ? <Button isEditable={isEditable} text="Отменить" onButtonClick={onCancel} /> : <Button isEditable={isEditable} text="Удалить" onButtonClick={onDelete} />
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