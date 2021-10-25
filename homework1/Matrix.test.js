import { assert } from "./utils.js";
import { Matrix } from "./Matrix.js";
import { Vector } from "./Vector.js";

export function test() {
  const m1 = new Matrix(new Vector(1,2,3), new Vector(3,2,1));
  const m2 = new Matrix(new Vector(3,2,1), new Vector(1,2,3));

  const expectedNegated = new Matrix(new Vector(-1,-2,-3), new Vector(-3,-2,-1));
  assert(m1.negate(), expectedNegated, "Should negate a matrix");

  const expectedAdd = new Matrix(new Vector(4,4,4), new Vector(4,4,4))
  assert(m1.add(m2), expectedAdd, "Should add up two matrices");

  const expectedSub = new Matrix(new Vector(-2,0,2), new Vector(2,0,-2))
  assert(m1.subtract(m2), expectedSub, "Should subtract two matrices");

  const expectedTranspose = new Matrix(new Vector(1,3), new Vector(2,2), new Vector(3,1), new Vector(0,0));
  assert(m1.transpose(), expectedTranspose, "Should transpose a matrix");

  // TODO: add vectorMultiply test
}
