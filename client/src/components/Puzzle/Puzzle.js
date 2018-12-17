import React from 'react';

import './Puzzle.scss';

import PuzzleAreaContainer from './../../containers/PuzzleAreaContainer';
import PuzzleInfoContainer from './../../containers/PuzzleInfoContainer';
import RestartButtonContainer from './../../containers/RestartButtonContainer';

export default class Puzzle extends React.Component {
    render() {
        return(
            <div className="puzzle">
                <div className="puzzle__body">
                    <PuzzleAreaContainer />
                    <PuzzleInfoContainer />
                </div>
                <RestartButtonContainer />
            </div>
        )
    }
}
