import {transform} from "./transform.mjs";

it('should perform the transformation', () => {
    expect(transform([
        [0, 0, 0]
    ])).toEqual([
        []
    ])
});
