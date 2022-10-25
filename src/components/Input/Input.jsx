import './Input.css';
import '../../styles.css';

export default function Input(props) {
    return (
        <div>
            <input className="input" type="text" defaultValue={props.value}/>
        </div>
    );
}