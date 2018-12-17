import React from 'react';

export default class RestartButton extends React.Component {
    restartGame = () => {
        this.props.resetTiles(this.props.size);
        this.props.updateMovesCounter(0);
        this.props.updateTimeCounter(false, true);
    }

    render() {
        return <button className="puzzle__button button" type="button" onClick={this.restartGame}>Play Again</button>
    }
}
