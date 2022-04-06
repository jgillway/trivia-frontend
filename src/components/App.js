import React from 'react';
import './styles/App.css';
import Card from'./Card';
import RefreshArrow from './RefreshArrow';
import AddQuestion from './AddQuestion';
import AddQuestionModal from './AddQuestionModal';
import { getQuestions } from './api/CardApi';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: false,
      questionStack: [],
      show: false
    }

    this.onChangeRefresh = this.onChangeRefresh.bind(this);
    this.onChangeShow = this.onChangeShow.bind(this);
  }

  componentDidMount() {
    this.setState({ questionStack: getQuestions() });
    console.log(this.state.questionStack); 
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
    return (
      <>
        <div className="header">
          <h1>Header Title</h1>
          <p>Header sub-text</p>
        </div>
        <div className="main">
          <AddQuestionModal show={this.state.show} changeShow={ this.onChangeShow } />
          <div className='refresh'><RefreshArrow changeRefresh={ this.onChangeRefresh } loading={ this.state.isLoading } /></div>
          <div className='add_question' onClick={ this.onChangeShow }><AddQuestion /></div>
          <h2>TITLE HEADING</h2>
          <div className='card_container'>
            <Card loading={ this.state.isLoading } getCardInfo={ this.getCardInfo } />
            <Card loading={ this.state.isLoading } getCardInfo={ this.getCardInfo } />
            <Card loading={ this.state.isLoading } getCardInfo={ this.getCardInfo } />
          </div>
        </div>
        <div className="footer">
          <h2>Footer</h2>
        </div>
      </>
    );
  }
}

export default App;