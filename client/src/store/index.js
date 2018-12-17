import { createStore } from 'redux';

import rootReducer from './../reducers';
import { createPuzzleLayout } from './../global/js/utils';

import puzzle from './../../../data/puzzle';

const defaultState = {
    puzzle,
    layout: createPuzzleLayout(puzzle.size),
    moves: 0,
    timer: {
        active: false,
        time: 0
    }
}

const store = createStore(rootReducer, defaultState);

export default store;
