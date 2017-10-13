import React from 'react'
import PropTypes from 'prop-types'

const Players = props => {
  return (
    <div className="player">
      <div className="player-name"></div>
      <div className="player-score">
        <div className="counter">
          <button className="counter-action decrement"> - </button>
          <div className="counter-score"></div>
          <button className="counter-action increment"> + </button>
          {/* Counter Component */}
        </div>
      </div>
    </div>
  );
}

export default Players