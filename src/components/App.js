import React from 'react';
import './styles/App.css';
import Card from'./Card';
import RefreshArrow from './RefreshArrow';
import AddQuestion from './AddQuestion';
import AddQuestionModal from './AddQuestionModal';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: false,
      show: false
    }

    this.onChangeRefresh = this.onChangeRefresh.bind(this);
    this.onChangeShow = this.onChangeShow.bind(this);
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

  render() {
    return (
      <>
      {console.log(this.state.show)}
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
            <Card loading={ this.state.isLoading } />
            <Card loading={ this.state.isLoading } />
            <Card loading={ this.state.isLoading } />
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