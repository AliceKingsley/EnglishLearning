import React from 'react';
import './Item.css';
import Button from '../Button/Button.jsx';
import Input from '../Input/Input';

export default function Item(props) {

    return (
        <React.Fragment>
            <tr className='row'>
                <td className='cell cell__number'>{props.number}</td>
                <td className='cell'>{props.isEditable ? <Input value={props.english} /> : <div>{props.english}</div>}</td>
                <td className='cell'>{props.isEditable ? <Input value={props.russian} /> : <div>{props.russian}</div>}</td>
                <td className='cell'>{props.isEditable ? <Input value={props.transcription} /> : <div>{props.transcription}</div>}</td>
                <td className='cell'>{props.isEditable ? <Input value={props.tags} /> : <div>{props.tags}</div>}</td>
                <td className='cell'>
                    <Button isEditable={props.isEditable} text={props.isEditable ? "Сохранить" : "Редактировать"} />
                    <Button isEditable={props.isEditable} text={props.isEditable ? "Отменить" : "Удалить"} />
                </td>
            </tr>
        </React.Fragment>
    );
}