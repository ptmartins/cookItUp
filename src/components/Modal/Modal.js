import { FaTimes } from 'react-icons/fa';
import './Modal.css'

const Modal = ({open, data}) => {

    const modalClass = open ? 'modal modal--show' : 'modal modal--hide';

    return (
        <div className={modalClass}>
            <div className="modal__header">
                <div className="modal__title">Show ingredients</div>
                <FaTimes className='modal__close'/>
            </div>
            <div className="modal__body"></div>
            <div className="modal__footer"></div>
        </div>
    )
}

export default Modal