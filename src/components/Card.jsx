import './styles/Card.css';

function Card() {
  const cards = document.getElementsByClassName('card');
  for (var i = 0; i < cards.length; i++) {
      cards[i].addEventListener('click', function(){
          this.classList.toggle('is-flipped');
      })
  };

  return (
    <div className='container'>
      <div className='card'>
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

export default Card;
