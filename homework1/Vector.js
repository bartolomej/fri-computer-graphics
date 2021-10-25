export class Vector {

  constructor (x = 0, y = 0, z = 0, k = 0) {
    this.x = x;
    this.y = y;
    this.z = z;
    this.k = k; // added a 4th component so that I could implement transformational matrices
  }

  toString () {
    return `(${this.x}, ${this.y}, ${this.z}, ${this.k})`;
  }

  toArray () {
    return [this.x, this.y, this.z, this.k];
  }

  // negacija trenutnega vektorja
  negate () {
    return new Vector(
      this.x * -1,
      this.y * -1,
      this.z * -1,
      this.k * -1
    )
  }

  // seštevek trenutnega vektorja in vektorja v
  add (v) {
    return new Vector(
      this.x + v.x,
      this.y + v.y,
      this.z + v.z,
      this.k + v.k
    )
  }

  //  razlika trenutnega vektorja in vektorja v
  subtract (v) {
    return new Vector(
      this.x - v.x,
      this.y - v.y,
      this.z - v.z,
      this.k - v.k,
    )
  }

  // zmnožek po komponentah trenutnega vektorja in vektorja v
  multiply (v) {
    return new Vector(
      this.x * v.x,
      this.y * v.y,
      this.z * v.z,
      this.k * v.k,
    )
  }

  // deljenje po komponentah trenutnega vektorja in vektorja v,
  divide (v) {
    return new Vector(
      this.x / v.x,
      this.y / v.y,
      this.z / v.z,
      this.k / v.k
    )
  }

  // skalarni produkt trenutnega vektorja in vektorja v
  dot (v) {
    return this.x * v.x + this.y * v.y + this.z * v.y + this.k * v.k;
  }

  // vektorski produkt trenutnega vektorja in vektorja v,
  cross (v) {
    return this.length() * v.length() * Math.sin(this.angle(v))
  }

  // dolžina trenutnega vektorja
  length () {
    return Math.sqrt(this.x ** 2 + this.y ** 2 + this.z ** 2 + this.k ** 2);
  }

  // normaliziran trenutni vektor (vektor v isti smeri, toda dolžine 1)
  normalize () {
    const factor = 1 / this.length();
    return new Vector(
      this.x * factor,
      this.y * factor,
      this.z * factor,
      this.k * factor
    )
  }

  // pravokotna projekcija trenutnega vektorja na vektor v,
  project (v) {
    return v.scale(this.dot(v) / (v.length() ** 2))
  }

  // zrcaljenje trenutnega vektorja prek vektorja v
  reflect (v) {

  }

  // kot v radianih med trenutnim vektorjem in vektorjem v
  angle (v) {
    return Math.acos(this.dot(v) / (this.length() * v.length()));
  }

  // pomnozi trenutni vektor z scalarjem
  scale (n) {
    return new Vector(
      this.x * n,
      this.y * n,
      this.z * n,
      this.k * n,
    )
  }

}
