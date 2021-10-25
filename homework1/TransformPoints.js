import { PointManager } from "./PointManager.js";
import { Transformation } from "./Transformation.js";
import { Vector } from "./Vector.js";


export class TransformPoints {

  constructor () {
    this.pointManager = new PointManager();
    this.transformation = new Transformation();
  }

  // prebere točke iz niza input (po formatu iz razreda PointManager),
  // jih transformira po spodaj opisanem postopku in jih nato vrne v obliki niza (po formatu iz razreda PointManager)
  transformPoints (input) {
    const points = this.pointManager.parsePoints(input);

    this.transformation.translate(new Vector(2.8, 0, 0));
    this.transformation.rotateX(Math.PI / 4);
    this.transformation.translate(new Vector(0, 0, 7.15));
    this.transformation.translate(new Vector(0, 2.45, 0));
    this.transformation.scale(new Vector(1.8, 1.8, 0));
    this.transformation.rotateY(5 * Math.PI / 10)

    const transformedPoints = points.map(point => this.transformation.transform(point));
    return this.pointManager.formatPoints(transformedPoints);
  }
}
