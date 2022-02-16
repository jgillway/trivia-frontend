import React from 'react';
import './styles/Card.css';

class Card extends React.Component {
  static getDerivedStateFromProps = (nextProps, prevState) =>
    nextProps.loading === prevState.loading
      ? null
      : { isLoading: nextProps.loading };
  constructor(props) {
    super(props);

    this.state = {
      isFlipped: false,
      isLoading: this.props.loading,
    }

    this.handleClick = this.handleClick.bind(this);
    this.resetFlipped = this.resetFlipped.bind(this);
  }

  handleClick() {
    if(!this.props.loading){
      this.setState(prevState => ({
        isFlipped: !prevState.isFlipped
      }));
    }
  }

  resetFlipped() {
    if(this.state.isFlipped){
      this.setState(prevState => ({
        isFlipped: !prevState.isFlipped
      }));
    }
  }

  render() {
    if(this.state.isFlipped && this.state.isLoading){
      this.resetFlipped();
    }
    return (
      <div className='container'>
        <div className={`card ${this.state.isFlipped ? ' is-flipped' : ''}`} onClick={this.handleClick}>
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
