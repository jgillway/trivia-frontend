import React from 'react';
import './styles/AddQuestionModal.css'

const AddQuestionModal = props => {

    return (
      <div className={`modal ${props.show ? 'show' : ''}`} onClick={ () => props.changeShow() }>
          <div className='modal-content' onClick={ e => e.stopPropagation() }>
            <div className='modal-header'>
                <h4 className='modal-title'>Add A New Question</h4>
            </div>
            <div className='modal-body'>
                <form className='add-question'>
                    <label htmlFor='question'><b>Question:&nbsp;</b></label>
                    <input type='text' id='question' name='question'></input><br /><br />
                    <label htmlFor='answer'><b>Answer:&nbsp;&nbsp;&nbsp;&nbsp;</b></label>
                    <input type='text' id='answer' name='answer'></input><br /><br />
                    <label htmlFor='category'><b>Category:&nbsp;</b></label>
                    <input type='text' id='category' name='category'></input><br />
                </form>
            </div>
            <div className='modal-footer'>
                <button className='question-submit'>Submit</button>
                <button className='modal-close' onClick={() => props.changeShow() }>Close</button>
            </div>
          </div>
      </div>
    )
}

export default AddQuestionModal;