import { Matrix } from "./Matrix.js";
import { Vector } from "./Vector.js";


export class Transformation {

  constructor () {
    this.m = new Matrix(
      new Vector(0, 0, 0, 0),
      new Vector(0, 0, 0, 0),
      new Vector(0, 0, 0, 0),
      new Vector(0, 0, 0, 0),
    )
  }

  // shranjeno matriko spremeni tako, da transformaciji doda premik za vektor v
  translate (v) {
    this.m = this.m.add(new Matrix(
      new Vector(1, 0, 0, v.x),
      new Vector(0, 1, 0, v.y),
      new Vector(0, 0, 1, v.z),
      new Vector(0, 0, 0, 1),
    ))
  }

  // shranjeno matriko spremeni tako,
  // da transformaciji doda razteg v smereh osi X, Y in Z s faktorji, določenimi v vektorju v,
  scale (v) {
    this.m = this.m.add(new Matrix(
      new Vector(v.x, 0, 0, 0),
      new Vector(0, v.y, 0, 0),
      new Vector(0, 0, v.z, 0),
      new Vector(0, 0, 0, 1),
    ))
  }

  // shranjeno matriko spremeni tako,
  // da transformaciji doda vrtenje okrog osi X za kot angle, podan v radianih
  rotateX (angle) {
    this.m = this.m.add(new Matrix(
      new Vector(1, 0, 0, 0),
      new Vector(0, Math.cos(angle), Math.sin(angle), 0),
      new Vector(0, -Math.sin(angle), Math.cos(angle), 0),
      new Vector(0, 0, 0, 1),
    ))
  }

  // shranjeno matriko spremeni tako,
  // da transformaciji doda vrtenje okrog osi Y za kot angle, podan v radianih,
  rotateY (angle) {
    this.m = this.m.add(new Matrix(
      new Vector(Math.cos(angle), 0, -Math.sin(angle), 0),
      new Vector(0, 1, 0, 0),
      new Vector(Math.sin(angle), 0, Math.cos(angle), 0),
      new Vector(0, 0, 0, 1),
    ))
  }

  // shranjeno matriko spremeni tako,
  // da transformaciji doda vrtenje okrog osi Z za kot angle, podan v radianih
  rotateZ (angle) {
    this.m = this.m.add(new Matrix(
      new Vector(Math.cos(angle), Math.sin(angle), 0, 0),
      new Vector(-Math.sin(angle), Math.cos(angle), 0, 0),
      new Vector(0, 0, 0, 0),
      new Vector(0, 0, 0, 1),
    ))
  }

  // transformira vektor v s shranjeno matriko.
  transform (v) {
    return this.m.multiplyVector(v);
  }
}
