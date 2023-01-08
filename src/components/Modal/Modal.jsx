import './Modal.css';

export default function Modal(props) {

    const {visible, title, content, onClose} = props;

    if (!visible) return null;

    return (
        <div className='modal' onClick={onClose}>
            <div className='modal-dialog' onClick={ e => e.stopPropagation() }>
                <div className='modal-header'>
                    <h3 className='modal-title'>{title}</h3>
                    <span className='modal-close' onClick={onClose}>&times;</span>
                </div>
                <div className='modal-body'>
                    <div className='modal-content'>{content}</div>
                </div>
            </div>
        </div>
    )
}