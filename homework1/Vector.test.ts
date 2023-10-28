import {
    add,
    angle,
    cross,
    divide,
    dot,
    length,
    multiply,
    negate,
    normalize,
    project,
    reflect,
    subtract
} from "./Vector.mjs";

describe('Vector', () => {
    it('should negate a vector', () => {
        expect(negate([1, 2, 3, 4])).toEqual([-1, -2, -3, -4])
    });

    it('should sum vectors', () => {
        expect(add([1, 2, 3], [1, 2, 3])).toEqual([2, 4, 6]);
        expect(add([1, -1], [-1, 1])).toEqual([0, 0]);
    });

    it('should subtract vectors', () => {
        expect(subtract([1, 2, 3], [1, 2, 3])).toEqual([0, 0, 0]);
        expect(subtract([1, -1], [-1, 1])).toEqual([2, -2]);
    });

    it('should multiply vectors', () => {
        expect(multiply([1, 2, 3], [1, 2, 3])).toEqual([1, 4, 9]);
        expect(multiply([1, -1], [-1, 1])).toEqual([-1, -1]);
    });

    it('should divide vectors', () => {
        expect(divide([1, 2, 3], [1, 2, 3])).toEqual([1, 1, 1]);
        expect(divide([1, -1], [-1, 1])).toEqual([-1, -1]);
    });

    it('should calculate dot product', () => {
        expect(dot([1, 0], [1, 0])).toEqual(1);
        expect(dot([1, 0], [-1, 0])).toEqual(-1);
        expect(dot([1, 0], [0, 1])).toEqual(0);
    });

    it('should calculate cross product', () => {
        expect(cross([2, 3, 4], [5, 6, 7])).toEqual([-3, 6, -3])
    });

    it('should calculate vector length', () => {
        expect(length([0, 0, 0])).toEqual(0)
        expect(length([0, 0, 0, 1])).toEqual(1)
    });

    it('should normalize vector', () => {
        expect(normalize([2, 2, 2])).toEqual([1, 1, 1])
    });

    it('should project vector', () => {
        expect(project([1, 1], [1, 0])).toEqual([1, 0])
    });

    it('should reflect vector', () => {
        expect(reflect([2, 3], [0, 2])).toEqual([2, -3])
    });

    it('should calculate angle between vectors', () => {
        expect(angle([1, 0], [0, 1])).toBeCloseTo(Math.PI / 2);
        expect(angle([1, 1], [1, 1])).toBeCloseTo(0);
        expect(angle([1, 1, 1], [-1, -1, -1])).toBeCloseTo(Math.PI);
    });

});
