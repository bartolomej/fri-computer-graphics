import { Vector } from "./Vector.js";


export class PointManager {

  // branje točk iz niza input v seznam primerkov razreda Vector.
  // Format vhoda je seznam vrstic, od katerih vsaka vsebuje tri števila
  // (koordinate X, Y in Z posamezne točke), ločene s presledki.
  // Prazne vrstice ignorirajte.
  parsePoints (input) {
    return input
      .split("\n") // split input by lines, every line is new element in array
      .filter(Boolean) // exclude empty lines (because Boolean('') === false)
      .map(line => line.split(" ").map(parseFloat)) // parse vector components of every line
      .map(components => new Vector(...components))
  }

  // pisanje točk iz seznama vektorjev v niz znakov.
  // Format je enak kot pri branju.
  formatPoints (points) {
    return points.map(v => `${v.x} ${v.y} ${v.z}`).join("\n");
  }
}
