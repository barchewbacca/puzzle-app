import React from 'react';

import './../Game/Game.scss';

import Puzzle from './../Puzzle/Puzzle';

export default class App extends React.Component {
    render() {
        return(
            <main>
                <div className="container">
                    <div className="game">
                        <h1 className="game__title">Sliding Puzzle</h1>
                        <div className="game__body">
                            <Puzzle/>
                        </div>
                    </div>
                </div>
            </main>
        )
    }
}
