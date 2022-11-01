import './Input.css';
import '../../styles.css';
import { useState } from 'react';

export default function Input(props) {

    const {value} = props;

    const [isChanged, setIsChanged] = useState(false);

    function onInputChange() {
        setIsChanged(!isChanged);
    }

    return (
        <div>
            <input className="input" type="text" defaultValue={value} onChange={onInputChange} />
        </div>
    );
}