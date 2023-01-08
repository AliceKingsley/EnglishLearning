import './Input.css';
import '../../styles.css';
import { useState } from 'react';
import * as classnames from 'classnames';

export default function Input(props) {

    const {index, value, onDataChange} = props;

    const [isError, setIsError] = useState(false);

    function onInputChange(e, index) {
        const conditionErrorEmpty = (e.target.name === "data-input" && e.target.value <= 0);

        setIsError(conditionErrorEmpty);

        const digit = /\d/g;
        const conditionErrorDigital = digit.test(e.target.value);
        let errorText = '';

        if (conditionErrorDigital) {
            errorText = 'Поле не может содержать цифр';
        }

        onDataChange(e, index, conditionErrorEmpty, errorText);
    }

    let inputClass = classnames(
        'input',
        {
            'input_error': isError,
        }
    )

    return (
        <div>
            <input name="data-input" className={inputClass} type="text" defaultValue={value} onChange={ (e) => {onInputChange(e, index)} } />
        </div>
    );
}