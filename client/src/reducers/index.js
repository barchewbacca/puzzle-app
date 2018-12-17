import { combineReducers } from 'redux';
import * as types from './../constants/ActionTypes';
import { createPuzzleLayout } from './../global/js/utils';

const layout = (state = [], action) => {
    switch (action.type) {
        case types.MOVE_TILE:
            return action.updatedPositions;
        case types.RESET_TILES:
            return createPuzzleLayout(action.size);
        default:
            return state;
    }
}

const moves = (state = 0, action) => {
    switch (action.type) {
        case types.INCREMENT_MOVES_COUNTER:
            return state + 1;
        case types.SET_MOVES_COUNTER:
            return action.count;
        default:
            return state;
    }
}

const puzzle = (state = [], action) => {
    return state;
}

const timer = (state = { active: false, time: 0 }, action) => {
    switch (action.type) {
        case types.START_TIMER:
            return {
                ...state,
                active: true,
                offset: action.offset
            };
        case types.STOP_TIMER:
            return {
                ...state,
                active: false,
                time: state.time
            };
        case types.RESET_TIMER:
            return {
                ...state,
                active: false,
                time: 0
            }
        case types.TICK:
            return {
                ...state,
                time: state.time + (action.time - state.offset),
                offset: action.time
            };
        default:
            return state;
    }
}

const rootReducer = combineReducers({
    puzzle,
    timer,
    moves,
    layout
});

export default rootReducer;
