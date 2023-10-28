import {negate} from "./Vector.mjs";

describe('Vector', () => {
    it('should negate a vector', () => {
       expect(negate([1,2,3,4])).toEqual([-1,-2,-3,-4])
    });
});
