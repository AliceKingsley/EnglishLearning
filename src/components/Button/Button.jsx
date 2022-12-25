import React from 'react';
import './Button.css';
import * as classnames from 'classnames';

export default function Button(props) {
    // const isEditable = props.isEditable;
    const {isEditable, onButtonClick, number} = props;

    let buttonClasses = classnames(
        'button',
        'button__icon-style',
        {
            'button_orange': !isEditable && (props.text === "Редактировать"),
            'button_red': !isEditable && (props.text === "Удалить"),
            'button_green': isEditable && (props.text === "Сохранить"),
            'button_yellow': isEditable && (props.text === "Отменить")
        }
    )

    function onClick(e) {
        onButtonClick(number);
        e.preventDefault();
    }

    return (
        <React.Fragment>
            <button className={buttonClasses} onClick={onClick} disabled={false}></button>
        </React.Fragment>
    );
}