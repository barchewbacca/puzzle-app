import React from 'react';

import TimeCounter from './../TimeCounter/TimeCounter';
import MovesCounter from './../MovesCounter/MovesCounter';
import PuzzlePreview from './../PuzzlePreview/PuzzlePreview';

export default class PuzzleInfo extends React.Component {
    render() {
        return(
            <div className="puzzle__aside">
                <div className="puzzle__info">
                    <TimeCounter
                        timer={this.props.timer}
                        updateTimeCounter={this.props.updateTimeCounter}
                    />
                </div>
                <div className="puzzle__info">
                    <MovesCounter
                        moves={this.props.moves}
                    />
                </div>
                <div className="puzzle__info hide-on-mobile">
                    <PuzzlePreview
                        image={this.props.image}
                    />
                </div>
            </div>
        )
    }
}
