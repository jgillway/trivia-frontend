import React, { useState } from 'react';
import './styles/AddQuestionModal.css'
import { addQuestion } from './api/QuestionApi';

const AddQuestionModal = props => {

    const [question, setQuestion] = useState({
        text: "",
        answer: "",
        category: "",
        isValid: false
    });

    async function handleSubmit(event) {
        event.preventDefault();
        await addQuestion(question);
        props.changeShow();
    }

    function handleInputChange(event) {
        setQuestion({ ...question, [event.target.id]: event.target.value });
    }

    return (
      <div className={`modal ${props.show ? 'show' : ''}`} onClick={ () => props.changeShow() }>
          <div className='modal-content' onClick={ e => e.stopPropagation() }>
            <div className='modal-header'>
                <h4 className='modal-title'>Add A New Question</h4>
            </div>
            <form className='add-question' onSubmit={handleSubmit}>
                <div className='modal-body'>
                    <label htmlFor='question'><b>Question:&nbsp;</b></label>
                    <input type='text' id='text' onChange={handleInputChange} value={question.text} required></input><br /><br />
                    <label htmlFor='answer'><b>Answer:&nbsp;&nbsp;&nbsp;&nbsp;</b></label>
                    <input type='text' id='answer' onChange={handleInputChange} value={question.answer} required></input><br /><br />
                    <label htmlFor='category'><b>Category:&nbsp;</b></label>
                    <input type='text' id='category' onChange={handleInputChange} value={question.category} required></input><br />
                </div>
                <div className='modal-footer'>
                    <input type='submit' className='question-submit' value='Add Question' />
                    <button className='modal-close' onClick={() => props.changeShow() }>Close</button>
                </div>
            </form>
          </div>
      </div>
    )
}

export default AddQuestionModal;