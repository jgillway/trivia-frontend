import React from 'react';
import './styles/RefreshArrow.css';

class RefreshArrow extends React.Component {

  handleRefresh() {
    this.props.changeRefresh();
  }

  render() {
    return (
      <div className="tooltip">
        <span className="tooltiptext">Refresh</span>
        <div className="refresh_wrapper">
          <div className={ `rotator ${ this.props.loading ? ' active' : '' }` } onClick={ this.handleRefresh.bind(this) }>
            <div className="circle"></div>
            <div className="arrow"></div>
          </div>
        </div>
      </div>
    );
  }
}

export default RefreshArrow;

