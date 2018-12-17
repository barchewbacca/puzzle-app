import { connect } from 'react-redux';
import { updateTimeCounter } from './../actions';

import RestartButton from './../components/PuzzleInfo/PuzzleInfo';

const mapStateToProps = (state) => {
    return {
        size: state.puzzle.size,
        timer: state.timer,
        moves: state.moves,
        image: state.puzzle.image
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
		updateTimeCounter: (isActive, offset) => dispatch(updateTimeCounter(isActive, offset)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(RestartButton);
