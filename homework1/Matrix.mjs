// Return matrices as 2D arrays in row-major order, e.g.:
// return [
//     [ 1, 2, 3, 4 ],
//     [ 5, 6, 7, 8 ],
//     [ 7, 6, 5, 4 ],
//     [ 3, 2, 1, 0 ],
// ];

import {dot} from "./Vector.mjs";

export function identity() {
    return [
        [1, 0, 0, 0],
        [0, 1, 0, 0],
        [0, 0, 1, 0],
        [0, 0, 0, 1]
    ]
}

export function translation(t) {
    // TODO implement
}

export function scaling(s) {
    // TODO implement
}

export function rotationX(angle) {
    // TODO implement
}

export function rotationY(angle) {
    // TODO implement
}

export function rotationZ(angle) {
    // TODO implement
}

export function negate(m) {
    // TODO implement
}

export function add(m, n) {
    // TODO implement
}

export function subtract(m, n) {
    // TODO implement
}

export function transpose(m) {
    const {rows, cols} = getDimensions(m)
    const tm = init({
        cols: rows,
        rows: cols
    });

    for (let row = 0; row < rows; row++) {
        for (let col = 0; col < cols; col++) {
            tm[col][row] = m[row][col];
        }
    }

    return tm;
}

export function multiply(m, n) {
    const mDim = getDimensions(m);
    const nDim = getDimensions(n);
    if (mDim.cols !== nDim.rows) {
        throw new Error("Invalid input matrices. The number of columns of `m` must match the number of rows of `n`.")
    }
    const r = init({
        cols: nDim.cols,
        rows: mDim.rows
    });
    for (let col = 0; col < nDim.cols; col++) {
        for (let row = 0; row < mDim.rows; row++) {
            r[row][col] = dot(
                getRow(m, row),
                getCol(n, col)
            )
        }
    }
    return r;
}

export function transform(m, v) {
    return multiply(m, v.map(e => [e])).flat();
}

// Helpers

function getDimensions(m) {
    return {
        rows: m.length,
        cols: m[0].length
    }
}

function getRow(m, row) {
    return m[row];
}

function getCol(m, col) {
    const column = [];
    for (let row = 0; row < m.length; row++) {
        column.push(m[row][col])
    }
    return column;
}

function init({cols, rows}) {
    const m = [];
    for (let r = 0; r < rows; r++) {
        m.push(Array.from({length: cols}).map(() => 0))
    }
    return m;
}
