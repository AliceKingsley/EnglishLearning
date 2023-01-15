import './Loader.css';
import '../../styles.css';

export default function Loader() {
    return (
        <div className='loader-container'>
            <div className='loader-box'>
                <div className='loader'><span></span></div>
                <div className='loader'><span></span></div>
                <div className='loader'><i></i></div>
                <div className='loader'><i></i></div>
            </div>
        </div>
    );
}