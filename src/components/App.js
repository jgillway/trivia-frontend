import React from 'react';
import './styles/App.css';
import Card from'./Card';
import RefreshArrow from './RefreshArrow';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: false
    }

    this.onChangeRefresh = this.onChangeRefresh.bind(this);
  }

  onChangeRefresh() {
    this.setState(prevState => ({
      isLoading: !prevState.isLoading
    }));
  }

  render() {
    return (
      <>
        <div className="header">
          <h1>Header Title</h1>
          <p>Header sub-text</p>
        </div>
        <div className="navbar">
          <a href="#">Link</a>
          <a href="#">Link</a>
          <a href="#">Link</a>
        </div>
        <div className="main">
          <div className='refresh'><RefreshArrow changeRefresh={ this.onChangeRefresh } loading={ this.state.isLoading } /></div>
          <h2>TITLE HEADING</h2>
          <div className='refresh_container'>
          </div>
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