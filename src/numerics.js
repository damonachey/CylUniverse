// this code ported from C# System.Numerics.Quanternion and System.Numerics.Vector3

export const Numerics = {
  quaternionFromAxisAngle(axis, angle) {
    const x = angle * 0.5;
    const num = Math.sin(x);
    const w = Math.cos(x);
    return {
      x: axis.x * num,
      y: axis.y * num,
      z: axis.z * num,
      w: w
    };
  },

  quaternionFromYawPitchRoll(yaw, pitch, roll) {
    const x = roll * 0.5;
    const num = Math.sin(x);
    const num2 = Math.cos(x);
    const x2 = pitch * 0.5;
    const num3 = Math.sin(x2);
    const num4 = Math.cos(x2);
    const x3 = yaw * 0.5;
    const num5 = Math.sin(x3);
    const num6 = Math.cos(x3);

    return {
      x: num6 * num3 * num2 + num5 * num4 * num,
      y: num5 * num4 * num2 - num6 * num3 * num,
      z: num6 * num4 * num - num5 * num3 * num2,
      w: num6 * num4 * num2 + num5 * num3 * num
    };
  },

  transform(p, q) {
    const num = q.x + q.x;
    const num2 = q.y + q.y;
    const num3 = q.z + q.z;
    const num5 = q.w * num2;
    const num4 = q.w * num;
    const num6 = q.w * num3;
    const num7 = q.x * num;
    const num8 = q.x * num2;
    const num9 = q.x * num3;
    const num10 = q.y * num2;
    const num11 = q.y * num3;
    const num12 = q.z * num3;
    return {
      x: p.x * (1 - num10 - num12) + p.y * (num8 - num6) + p.z * (num9 + num5),
      y: p.x * (num8 + num6) + p.y * (1 - num7 - num12) + p.z * (num11 - num4),
      z: p.x * (num9 - num5) + p.y * (num11 + num4) + p.z * (1 - num7 - num10)
    };
  }
};
