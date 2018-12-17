import * as types from './../constants/ActionTypes';

export const moveTile = (updatedPositions) => {
    return {
        type: types.MOVE_TILE,
        updatedPositions
    }
};

export const resetTiles = (size) => {
    return {
        type: types.RESET_TILES,
        size
    }
};

export const updateMovesCounter = (value) => {
    if (typeof value !== 'undefined') {
        return {
            type: types.SET_MOVES_COUNTER,
            count: value
        }
    } else {
        return {
            type: types.INCREMENT_MOVES_COUNTER
        }
    }
};

export const updateTimeCounter = (isActive, offset) => {
    if (typeof isActive !== 'undefined') {
        if (isActive) {
            return {
                type: types.START_TIMER,
                offset: Date.now()
            }
        } else {
            if (offset) {
                return {
                    type: types.RESET_TIMER
                }
            } else {
                return {
                    type: types.STOP_TIMER
                }
            }
        }
    } else {
        return {
            type: types.TICK,
            time: Date.now()
        }
    }
};

