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
      isFlipped: false,
      questionStack: [],
      showAddQuestionModel: false,
      loadingScreen: false
    }

    this.onChangeRefresh = this.onChangeRefresh.bind(this);
    this.onChangeShowAddQuestionModel = this.onChangeShowAddQuestionModel.bind(this);
    this.loadMore = this.loadMore.bind(this);
    this.getQuestions = this.getQuestions.bind(this);
  }

  componentDidMount() {
    this.getQuestions();
    window.addEventListener('scroll', this.loadMore, false);
  }

  getQuestions() {
    var promise = getQuestionsAPI();
    promise.then(data => {
      this.setState({ 
        questionStack: this.state.questionStack.concat(data),
        loadingScreen: true,
        isFlipped: false
      });
    })
  }

  onChangeRefresh() {
    this.setState(prevState => ({
      isFlipped: true
    }));
    this.setState({ loadingScreen: false });
    this.setState({ questionStack: [] });
    this.getQuestions();
  }

  onChangeShowAddQuestionModel() {
    this.setState(prevState => ({
      showAddQuestionModel: !prevState.showAddQuestionModel
    }));
  }

  showItems() {
    var items = [];

    for (var i = 0; i < this.state.questionStack.length - 3; i + 3) {
        items.push(
          <>
            <div className='card_column'><Card key={i} loading={ this.state.isFlipped } card={ this.state.questionStack[i] } /></div>
            <div className='card_column'><Card key={i+=1} loading={ this.state.isFlipped } card={ this.state.questionStack[i+1] } /></div>
            <div className='card_column'><Card key={i+=2} loading={ this.state.isFlipped } card={ this.state.questionStack[i+2] } /></div>
          </>
        );
    }

    return items;
  }

  loadMore() {
    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
      this.getQuestions();
    }
  }

  render() {
    const renderCards = this.state.loadingScreen;
    return (
      <>
        <div className='header'>
          <h1>Header Title</h1>
          <p>Header sub-text</p>
        </div>
        <div className='main'>
          <AddQuestionModal show={ this.state.showAddQuestionModel } changeShow={ this.onChangeShowAddQuestionModel } />
          <div className='widget_container' >
            <div className='add_question' onClick={ this.onChangeShowAddQuestionModel }><AddQuestion /></div>
            <div className='refresh'><RefreshArrow changeRefresh={ this.onChangeRefresh } loading={ this.state.isFlipped } /></div>
          </div>
          <h2></h2>
          {renderCards
            ? <div className='card_container'>
                <div className='card_row'>
                  {this.showItems()}
                </div>
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