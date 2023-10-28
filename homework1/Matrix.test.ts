import {
    add,
    identity,
    multiply,
    negate,
    rotationX,
    scaling,
    subtract,
    transform,
    translation,
    transpose
} from "./Matrix.mjs";

describe('Matrix', () => {
    it('should init identity', () => {
        expect(identity()).toEqual(
            [
                [1, 0, 0, 0],
                [0, 1, 0, 0],
                [0, 0, 1, 0],
                [0, 0, 0, 1]
            ]
        )
    });

    it('should multiply matrices', () => {
        expect(multiply(
            [
                [1, 2, 3],
                [4, 5, 6]
            ],
            [
                [4, 5, 3],
                [1, -2, 0],
                [-1, 2, -6]
            ]
        )).toEqual(
            [
                [3, 7, -15],
                [15, 22, -24]
            ]
        )
    });

    it('should transpose matrix', () => {
        expect(transpose(
            [
                [1, 2, 3, 4],
                [5, 6, 7, 8],
            ]
        )).toEqual(
            [
                [1, 5],
                [2, 6],
                [3, 7],
                [4, 8]
            ]
        )
    });

    it('should transform vector', () => {
        expect(transform(
            [
                [1, 0],
                [0, -1]
            ],
            [
                1, 1
            ]
        )).toEqual(
            [
                1, -1
            ]
        );

        expect(transform(
            [
                [1, -1, 2],
                [0, -3, 1]
            ],
            [
                2, 1, 0
            ]
        )).toEqual(
            [
                1, -3
            ]
        )
    });

    it('should negate a matrix', () => {
        expect(negate(
            [
                [1, 2],
                [0, 1]
            ]
        )).toEqual(
            [
                [-1, -2],
                [0, -1]
            ]
        )
    });

    it('should generate scaling matrix', () => {
        expect(scaling([1, 2, 3, 4])).toEqual(
            [
                [1, 0, 0, 0],
                [0, 2, 0, 0],
                [0, 0, 3, 0],
                [0, 0, 0, 4]
            ]
        )
    });

    it('should generate translation matrix', () => {
        expect(translation([1, 2, 3])).toEqual(
            [
                [1, 0, 0, 1],
                [0, 1, 0, 2],
                [0, 0, 1, 3],
                [0, 0, 0, 1]
            ]
        )
    });

    it('should sum matrices', () => {
        expect(add(
            [
                [1, 2],
                [3, 4]
            ],
            [
                [-1, -2],
                [-3, -4]
            ]
        )).toEqual(
            [
                [0, 0],
                [0, 0],
            ]
        )
    });

    it('should subtract matrices', () => {
        expect(subtract(
            [
                [1, 2],
                [3, 4]
            ],
            [
                [-1, -2],
                [-3, -4]
            ]
        )).toEqual(
            [
                [2, 4],
                [6, 8],
            ]
        )
    });

});
