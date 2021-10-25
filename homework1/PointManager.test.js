import {assert} from "./utils.js";
import {PointManager} from "./PointManager.js";
import {Vector} from "./Vector.js";


const input = `1 2 3
3 2 1


1 1 1

1.2 2.3 3.4

1.1111 2.2222 3.3333

`


export function test() {
  const pointManager = new PointManager();

  const parsedInput = pointManager.parsePoints(input)
  const expectedInput = [
    new Vector(1,2,3),
    new Vector(3,2,1),
    new Vector(1,1,1),
    new Vector(1.2,2.3,3.4),
    new Vector(1.1111,2.2222,3.3333)
  ];
  assert(parsedInput, expectedInput, "Should parse txt vector input");


  const formattedOutput = pointManager.formatPoints(expectedInput);
  const expectedOutput = input.split("\n").filter(Boolean).join("\n");
  assert(formattedOutput, expectedOutput, "Should format vector array to txt")
}
