import {multiply, transform, transpose} from "./Matrix.mjs";

describe('Matrix', () => {

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
});
