import {Vector} from "./Vector.js";


export class Matrix {

  constructor (...m) {
    this.m = [...m];
  }

  toArray () {
    return [...this.m];
  }

  toString () {
    return `(${this.m.map(v => v.toString()).join(',')})`;
  }

  // negacija trenutne matrike
  negate () {
    return new Matrix(...this.m.map(v => v.negate()));
  }

  // seštevek trenutne matrike in matrike m
  add (m) {
    return new Matrix(...this.m.map((v, i) => v.add(m.m[i])));
  }

  // razlika trenutne matrike in matrike m
  subtract (m) {
    return new Matrix(...this.m.map((v, i) => v.subtract(m.m[i])));
  }

  //  transponirana matrika
  transpose () {
    return new Matrix(...this.m[0].toArray().map((e, mi) => {
      let vComponents = [];
      for (let i = 0; i < this.m.length; i++) {
        vComponents.push(this.m[i].toArray()[mi]);
      }
      return new Vector(...vComponents);
    }))
  }

  // zmnožek trenutne matrike in stolpičnega vektorja v. Pri vhodu uporabite homogene koordinate, rezultat homogenizirajte.
  multiplyVector (v) {
    if (v.length !== this.m.length) {
      throw new Error("Cant multiply matrix by vector. Invalid sizes.")
    }
    const components = [];
    for (let i = 0; i < this.m[0].length; i++) {
      components.push(this.m[i].scale(v.toArray()[i]));
    }
    return new Vector(...components)
  }

}
