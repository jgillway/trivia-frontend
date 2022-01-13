import React from 'react';
import './styles/Card.css';

class Card extends React.Component {
  state = {
    isFlipped: false
  }
  render() {
    const { isFlipped } = this.state;
    return (
      <div className='container'>
        <div className={`card ${this.state.isFlipped ? ' is-flipped' : ''}`} onClick={() => this.setState({isFlipped: !isFlipped})}>
          <div className='card__face card__face--front'>
            <div className='titleFront'>
              category
            </div>
            <p>Question</p>
          </div>
          <div className='card__face card__face--back'>
            <div className='titleBack'>
              question
            </div>
            <p>Answer</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Card;
