import { Geometry } from "./geometry";

it("should compute 2d distance", () => {
  const actual = Geometry.distancePointPoint({ x: 0, y: 0 }, { x: 3, y: 4 });

  expect(actual).toBe(5);
});

it("should compute 3d distance", () => {
  const actual = Geometry.distancePointPoint(
    { x: 0, y: 0, z: 0 },
    { x: 3, y: 4, z: 12 }
  );

  expect(actual).toBe(13);
});

it("should compute triangle area", () => {
  const actual = Geometry.areaTriangle(
    { x: 2, y: 1 },
    { x: 8, y: 9 },
    { x: 1, y: 8 }
  );

  expect(actual).toBe(25);
});
