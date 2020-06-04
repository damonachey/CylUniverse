import { Numerics } from "./numerics";

it("should create from axis angle", () => {
  const π = Math.PI;
  const actual = Numerics.quaternionFromAxisAngle({ x: 1, y: 0, z: 0 }, π / 4);

  expect(JSON.stringify(actual)).toBe(
    JSON.stringify({
      x: 0.3826834323650898,
      y: 0,
      z: 0,
      w: 0.9238795325112867
    })
  );
});

it("should create from yaw pitch roll", () => {
  const π = Math.PI;
  const actual = Numerics.quaternionFromYawPitchRoll(π / 2, π / 3, π / 4);

  expect(JSON.stringify(actual)).toBe(
    JSON.stringify({
      x: 0.5609855267969309,
      y: 0.43045933457687935,
      z: -0.09229595564125714,
      w: 0.7010573846499779
    })
  );
});

it("should create transform point", () => {
  const π = Math.PI;
  const q = Numerics.quaternionFromYawPitchRoll(π / 2, π / 3, π / 4);
  const p = { x: 1, y: 2, z: 3 };
  const actual = Numerics.transform(p, q);

  expect(JSON.stringify(actual)).toBe(
    JSON.stringify({
      x: 3.3371173070873836,
      y: -1.537416039573494,
      z: 0.7071067811865485
    })
  );
});
