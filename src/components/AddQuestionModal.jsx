import React from 'react';
import './styles/AddQuestionModal.css'

const AddQuestionModal = props => {

    return (
      <div className={`modal ${props.show ? 'show' : ''}`} onClick={ () => props.changeShow() }>
          <div className='modal-content' onClick={ e => e.stopPropagation() }>
            <div className='modal-header'>
                <h4 className='modal-title'>Modal Title</h4>
            </div>
            <div className='modal-body'>
                Modal Body
            </div>
            <div className='modal-footer'>
                <button className='modal-close' onClick={() => props.changeShow() }>Close</button>
            </div>
          </div>
      </div>
    )
}

export default AddQuestionModal;