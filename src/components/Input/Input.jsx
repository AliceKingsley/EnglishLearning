import './Input.css';
import '../../styles.css';
import { useState } from 'react';
import * as classnames from 'classnames';

export default function Input(props) {

    const {index, value, onDataChange} = props;

    const [isChanged, setIsChanged] = useState(false);
    const [isError, setIsError] = useState(false);

    function onInputChange(e, index) {
        setIsChanged(!isChanged);

        if (e.target.name === "data-input" && e.target.value <= 0) {
            setIsError(true);
            onDataChange(e, index, true);
        } else {
            setIsError(false);
            onDataChange(e, index, false);
        }
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