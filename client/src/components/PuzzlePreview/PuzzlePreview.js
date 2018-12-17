import React from 'react';

export default class PuzzlePreview extends React.Component {
    render() {
        return(
            <img className="puzzle__preview" src={this.props.image} alt="Puzzle Preview Image"/>
        )
    }
}
