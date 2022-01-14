import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Card from './components/Card';
import RefreshArrow from './components/RefreshArrow';

ReactDOM.render(
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
      <div className='refresh'><RefreshArrow /></div>
      <h2>TITLE HEADING</h2>
      <div className='refresh_container'>
      </div>
      <div className='card_container'>
        <Card />
        <Card />
        <Card />
      </div>
    </div>
    <div className="footer">
      <h2>Footer</h2>
    </div>
  </>,
  document.getElementById('root')
);

