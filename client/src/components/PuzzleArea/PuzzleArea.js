import React from 'react';
import isEqual from 'lodash.isequal';

import * as utils from './../../global/js/utils';

export default class PuzzleArea extends React.Component {
    constructor(props) {
        super(props);
        this.solvedArray = null;
    }

    handleTileClick(clickedPosition) {
        if (
            clickedPosition.y === this.props.emptyPosition.y && Math.abs(clickedPosition.x - this.props.emptyPosition.x) === 1 ||
            clickedPosition.x === this.props.emptyPosition.x && Math.abs(clickedPosition.y - this.props.emptyPosition.y) === 1
        ) {
            const updatedPositions = [...this.props.positions];

            utils.swapPosition(updatedPositions, this.props.emptyPosition, clickedPosition);

            // update the tile positions view
            this.props.moveTile(updatedPositions);

            // update the move counter
            this.props.updateMovesCounter();

            // start the timer on tile move if not already running
            if (!this.props.timer.active) {
                this.startTimer();
            }

            this.checkIfSolved(updatedPositions);
        }
    }

    startTimer() {
        this.props.updateTimeCounter(true);
        this.interval = setInterval(this.intervalTimer, 1000);
    }

    stopTimer() {
        this.props.updateTimeCounter(false);
        delete this.interval;
    }

    intervalTimer = () => {
        if (this.props.timer.active && (typeof(this.interval) !== 'undefined')) {
            this.props.updateTimeCounter();
        } else {
            clearInterval(this.interval);
        }
    }

    checkIfSolved(puzzleArray) {
        this.solvedArray = this.solvedArray || utils.getPositionsArray(utils.getBidimensionalArray(utils.getFlatArray(this.props.size)));

        if (isEqual(puzzleArray, this.solvedArray)) {
            this.stopTimer();
            alert('You win.');
            // TODO: finished state needs to be reworked using redux-thunk in order to delay the action dispatch
        }
    }

    renderTiles = (tile) => {
        const tileStyle = {
            width: tile.width,
            height: tile.height,
            top: tile.top,
            left: tile.left,
            backgroundImage: tile.backgroundImage
        }

        if (tile.id !== 0) {
            return <div className='puzzle__cell' key={tile.id} onClick={() => { this.handleTileClick(tile) }} style={tileStyle}><span className="puzzle__number">{tile.id}</span></div>;
        }
    }

    render() {
        return(
            <div className="puzzle__area">
                <img className="puzzle__background" src={this.props.image} alt="Main Background Image"/>
                {this.props.tiles.map(this.renderTiles)}
            </div>
        )
    }
}
