import './styles/App.css';

function Card() {
  function handleCardClick(e) {
    e.parentElement.classList.toggle('is-flipped')
  }

  return (
    <div className='container'>
      <div className='card' onClick={(e) => handleCardClick(e.target)}>
        <div className='card__face card__face--front'>test</div>
        <div className='card__face card__face--back'>test back</div>
      </div>
    </div>
  );
}

export default Card;
