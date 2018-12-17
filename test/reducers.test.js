import expect from 'expect'
import * as reducers from '../client/src/reducers'
import * as types from '../client/src/constants/ActionTypes'

describe('puzzle app reducer', () => {
    it('should handle MOVE_TILE'), () => {
        expect(
            reducers.layout(
                [],
                {
                    type: types.MOVE_TILE,
                    updatedPositions: [{ test: 1 }]
                }
            )
        ).toEqual([{ test: 1 }])
    },
    it('should handle RESET_TILES'), () => {
        expect(
            reducers.layout(
                [],
                {
                    type: types.RESET_TILES,
                    size: 9
                }
            )
        ).toEqual(
            [{ test: 1 }]
        )
    },
    it('should handle INCREMENT_MOVES_COUNTER'), () => {
        expect(
            reducers.moves(
                0,
                {
                    type: types.INCREMENT_MOVES_COUNTER
                }
            )
        ).toEqual(
            1
        )
    },
    it('should handle SET_MOVES_COUNTER'), () => {
        expect(
            reducers.moves(
                0,
                {
                    type: types.SET_MOVES_COUNTER,
                    count: 5
                }
            )
        ).toEqual(
            5
        )
    },
    it('should handle START_TIMER'), () => {
        expect(
            reducers.timer(
                {
                    active: false,
                    time: 0
                },
                {
                    type: types.START_TIMER,
                    offset: 123
                }
            )
        ).toEqual(
            {
                time: 0,
                active: true,
                offset: 123
            },
        )
    },
    it('should handle STOP_TIMER'), () => {
        expect(
            reducers.timer(
                {
                    active: false,
                    time: 0
                },
                {
                    type: types.STOP_TIMER
                }
            )
        ).toEqual(
            {
                time: 0,
                active: false
            },
        )
    },
    it('should handle RESET_TIMER'), () => {
        expect(
            reducers.timer(
                {
                    active: false,
                    time: 0
                },
                {
                    type: types.RESET_TIMER
                }
            )
        ).toEqual(
            {
                time: 0,
                active: false
            },
        )
    },
    it('should handle TICK'), () => {
        expect(
            reducers.timer(
                {
                    active: false,
                    time: 0
                },
                {
                    type: types.RESET_TIMER,
                    time: 123
                }
            )
        ).toEqual(
            {
                time: 0 + (123 - 0),
                offset: 123
            },
        )
    }
});

    // test('should handle REQUEST_SENT', () => {
    //   expect(
    //     reducers.app({
    //       queue: []
    //     }, {
    //       type: types.REQUEST_SENT,
    //       id: 'test_id',
    //       fileName: 'testFilename'
    //     })
    //   ).toEqual({
    //     queue: [{
    //       id: 'test_id',
    //       fileName: 'testFilename',
    //       status: uploadStatuses.PENDING
    //     }]
    //   })
    // });

    // test('should handle UPLOAD_SUCCEEDED', () => {
    //   expect(
    //     reducers.app({
    //       queue: [{
    //         id: 'test_id',
    //         fileName: 'testFilename',
    //         status: uploadStatuses.PENDING
    //       }]
    //     }, {
    //       type: types.UPLOAD_SUCCEEDED,
    //       id: 'test_id',
    //       link: 'http://test.com/'
    //     })
    //   ).toEqual({
    //     queue: [{
    //       id: 'test_id',
    //       fileName: 'testFilename',
    //       link: 'http://test.com/',
    //       status: uploadStatuses.SUCCESS
    //     }]
    //   })
    // });

    // test('should handle UPLOAD_FAILED', () => {
    //   expect(
    //     reducers.app({
    //       queue: [{
    //         id: 'test_id',
    //         fileName: 'testFilename',
    //         status: uploadStatuses.PENDING
    //       }]
    //     }, {
    //       type: types.UPLOAD_FAILED,
    //       id: 'test_id'
    //     })
    //   ).toEqual({
    //     queue: [{
    //       id: 'test_id',
    //       fileName: 'testFilename',
    //       status: uploadStatuses.ERROR
    //     }]
    //   })
    // });

//   });
