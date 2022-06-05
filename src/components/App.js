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
    this.getQuestions = this.getQuestions.bind(this);
    this.getQuestion = this.getQuestion.bind(this);
  }

  componentDidMount() {
    this.getQuestions();
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

  getQuestion() {
      if (this.state.questionStack < 1) {
          this.getQuestions();
      }
      return this.state.questionStack.pop();
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

  render() {
    const renderCards = this.state.loadingScreen;
    return (
      <>
        <div className='header'>
          <h1>Header Title</h1>
        </div>
        <div className='main'>
            <AddQuestionModal show={ this.state.showAddQuestionModel } changeShow={ this.onChangeShowAddQuestionModel } />
            {renderCards
                ? <div className='card_container'>
                    <Card loading={ this.state.isFlipped } getQuestion={ this.getQuestion } />
                    <Card loading={ this.state.isFlipped } getQuestion={ this.getQuestion } />
                    <Card loading={ this.state.isFlipped } getQuestion={ this.getQuestion } />
                    <div className='break'></div>
                    <Card loading={ this.state.isFlipped } getQuestion={ this.getQuestion } />
                    <Card loading={ this.state.isFlipped } getQuestion={ this.getQuestion } />
                    <Card loading={ this.state.isFlipped } getQuestion={ this.getQuestion } />
                    <div className='break'></div>
                    <Card loading={ this.state.isFlipped } getQuestion={ this.getQuestion } />
                    <Card loading={ this.state.isFlipped } getQuestion={ this.getQuestion } />
                    <Card loading={ this.state.isFlipped } getQuestion={ this.getQuestion } />
                  </div>
                : <div className='card_container'>
                    <h3>Loading please wait!</h3>
                  </div>
            }
            <div className='widget_container' >
                <div className='add_question' onClick={ this.onChangeShowAddQuestionModel }><AddQuestion /></div>
                <div className='refresh'><RefreshArrow changeRefresh={ this.onChangeRefresh } loading={ this.state.isFlipped } /></div>
            </div>
        </div>
      </>
    );
  }
}

export default App;