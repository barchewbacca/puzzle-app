import { connect } from 'react-redux';
import {
	resetTiles,
	updateTimeCounter,
	updateMovesCounter
} from './../actions';

import RestartButton from './../components/RestartButton/RestartButton';

const mapStateToProps = (state) => {
    return {
        size: state.puzzle.size
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        resetTiles: (size) => dispatch(resetTiles(size)),
		updateTimeCounter: (isActive, offset) => dispatch(updateTimeCounter(isActive, offset)),
		updateMovesCounter: (value) => dispatch(updateMovesCounter(value))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(RestartButton);
