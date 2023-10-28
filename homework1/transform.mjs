import * as matrix from "./Matrix.mjs";

export function transform(points) {
    const transformations = [
        matrix.translation([1.8, 0, 0]),
        matrix.rotationY(2 * Math.PI / 4),
        matrix.translation([0, 0, 3.15]),
        matrix.translation([0, 4.45, 0]),
        matrix.scaling([5.8, 5.8, 1, 1]),
        matrix.translation([6.28, 0, 0]),
        matrix.scaling([1, 1, 7.77, 1]),
        matrix.rotationX(8 * Math.PI / 11),
        matrix.rotationZ(9 * Math.PI / 11),
    ];

    const t = transformations.reduce((composed, m) => matrix.multiply(composed, m), matrix.identity())

    return points
        .map(pointIn3d => matrix.transform(t, [...pointIn3d, 1]))
        .map(([x, y, z, k]) => [
            x / k,
            y / k,
            z / k
        ]);
}
