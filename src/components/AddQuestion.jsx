import React from 'react';
import './styles/AddQuestion.css';

class AddQuestion extends React.Component {

  handleRefresh() {
    this.props.changeRefresh();
  }

  render() {
    return (
      <div className="tooltip">
        <span className="tooltiptext">Add New Question</span>
        <div className="question_wrapper">
          <div className="circle">
            <div className="plus">&#43;</div>
          </div>
        </div>
      </div>
    );
  }
}

export default AddQuestion;