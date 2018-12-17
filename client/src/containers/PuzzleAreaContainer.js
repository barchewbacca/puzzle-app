import { connect } from 'react-redux';
import { createSelector } from 'reselect';
import { getTilePosition } from './../global/js/utils';
import {
	moveTile,
	updateTimeCounter,
	updateMovesCounter
} from './../actions';

import PuzzleArea from './../components/PuzzleArea/PuzzleArea';

const layoutSelector = state => state.layout;
const puzzleSelector = state => state.puzzle;

const puzzleSizeSelector = createSelector(
    puzzleSelector,
    (puzzle) => {
        return puzzle.size
    }
);

const tileSizeSelector = createSelector(
    puzzleSizeSelector,
    (puzzleSize) => {
        return 100 / Math.sqrt(puzzleSize);
    }
);

const emptyPositionSelector = createSelector(
    layoutSelector,
    (layout) => {
        const emptyPosition = getTilePosition(layout, 0);
        return emptyPosition;
    }
)

export const tilesSelector = createSelector(
    [layoutSelector, puzzleSelector, tileSizeSelector],
    (layout, puzzle, tileSize) => {
        return layout.map((item, key) => {
            return {
                id: item.id,
                x: item.x,
                y: item.y,
                width: tileSize + '%',
                height: tileSize + '%',
                top: tileSize * item.y + '%',
                left: tileSize * item.x + '%',
                backgroundImage: `url('${puzzle.tileImages[item.id - 1]}')`
            }
        })
    }
);

const mapStateToProps = (state) => {
    return {
        positions: state.layout,
        tiles: tilesSelector(state),
        timer: state.timer,
        size: state.size,
        moves: state.moves,
        image: state.puzzle.image,
        emptyPosition: emptyPositionSelector(state),
        size: state.puzzle.size
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        moveTile: (updatedPositions) => dispatch(moveTile(updatedPositions)),
		updateTimeCounter: (isActive, offset) => dispatch(updateTimeCounter(isActive, offset)),
		updateMovesCounter: (value) => dispatch(updateMovesCounter(value))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PuzzleArea);


