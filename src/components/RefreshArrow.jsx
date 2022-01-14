import React from 'react';
import './styles/RefreshArrow.css';

class RefreshArrow extends React.Component {
  state = {
    isLoading: false
  }
  render() {
    const { isLoading } = this.state;

    return (
      <div className="tooltip">
        <span className="tooltiptext">Refresh</span>
        <div className="refresh_wrapper">
          <div className={`rotator ${this.state.isLoading ? ' active' : ''}`} onClick={() => this.setState({isLoading: !isLoading})}>
            <div className="circle"></div>
            <div className="arrow"></div>
          </div>
        </div>
      </div>
    );
  }
}

export default RefreshArrow;

