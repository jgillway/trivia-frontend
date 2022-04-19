import React from 'react';
import './styles/App.css';
import Card from'./Card';
import RefreshArrow from './RefreshArrow';
import AddQuestion from './AddQuestion';
import AddQuestionModal from './AddQuestionModal';
import { getQuestionsAPI } from './api/CardApi';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: false,
      questionStack: [],
      show: false,
      cardRender: false
    }

    this.onChangeRefresh = this.onChangeRefresh.bind(this);
    this.onChangeShow = this.onChangeShow.bind(this);
    this.getCardInfo = this.getCardInfo.bind(this);
  }

  componentDidMount() {
    this.getQuestions();
  }

  getQuestions() {
    var promise = getQuestionsAPI();
    promise.then(data => {
      this.setState({ 
        questionStack: data,
        cardRender: true
      });
    })
  }

  onChangeRefresh() {
    this.setState(prevState => ({
      isLoading: !prevState.isLoading
    }));
  }

  onChangeShow() {
    this.setState(prevState => ({
      show: !prevState.show
    }));
  }

  getCardInfo() {
    return this.state.questionStack.pop();
  }

  render() {
    const renderCards = this.state.cardRender;
    console.log(this.state.questionStack);
    return (
      <>
        <div className="header">
          <h1>Header Title</h1>
          <p>Header sub-text</p>
        </div>
        <div className="main">
          <AddQuestionModal show={this.state.show} changeShow={ this.onChangeShow } />
          <div className='widget_container'>
            <div className='add_question' onClick={ this.onChangeShow }><AddQuestion /></div>
            <div className='refresh'><RefreshArrow changeRefresh={ this.onChangeRefresh } loading={ this.state.isLoading } /></div>
          </div>
          <h2>TITLE HEADING</h2>
          {renderCards
            ? <div className='card_container'>
                <Card loading={ this.state.isLoading } getCardInfo={ this.getCardInfo } />
                <Card loading={ this.state.isLoading } getCardInfo={ this.getCardInfo } />
                <Card loading={ this.state.isLoading } getCardInfo={ this.getCardInfo } />
                <Card loading={ this.state.isLoading } getCardInfo={ this.getCardInfo } />
              </div>
            : <div className='card_container'>
                <h3>Loading please wait!</h3>
              </div>
          }
        </div>
      </>
    );
  }
}

export default App;