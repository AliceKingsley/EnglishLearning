import React from 'react';
import './Item.css';
import Button from '../Button/Button.jsx';
import Input from '../Input/Input';

export default function Item(props) {

    const {number, english, russian, transcription, tags, isEditable, onEditButtonClick, onSaveButtonClick, onCancelButtonClick} = props;

    return (
        <React.Fragment>
            <tr className='row'>
                <td className='cell cell__number'>{number}</td>
                <td className='cell'>{isEditable ? <Input value={english} /> : <div>{english}</div>}</td>
                <td className='cell'>{isEditable ? <Input value={russian} /> : <div>{russian}</div>}</td>
                <td className='cell'>{isEditable ? <Input value={transcription} /> : <div>{transcription}</div>}</td>
                <td className='cell'>{isEditable ? <Input value={tags} /> : <div>{tags}</div>}</td>
                <td className='cell'>
                    {
                        isEditable ? <Button isEditable={isEditable} text="Сохранить" onButtonClick={() => {onSaveButtonClick()}} number={number} /> : <Button isEditable={isEditable} text="Редактировать" onButtonClick={onEditButtonClick} number={number} />
                    }
                    {
                        isEditable ? <Button isEditable={isEditable} text="Отменить" onButtonClick={() => onCancelButtonClick((prev) => prev === number ? 0 : number)} number={number} /> : <Button isEditable={isEditable} text="Удалить" number={number} />
                    }
                </td>
            </tr>
        </React.Fragment>
    );
}