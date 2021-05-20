import { Utilities } from "./utilities.js";

export const Cyl = {
  id: 0,
  bounce: true,
  showDebug: true,

  initialize: function(canvasId) {
    this.canvas = document.getElementById(canvasId);
    this.ctx = this.canvas.getContext("2d");
  },

  create: function(color) {
    const radius = 2;

    return {
      id: this.id++,
      color: color,
      x: Utilities.random(radius, this.canvas.width - radius),
      y: Utilities.random(radius, this.canvas.height - radius),
      radius: radius,
      angle: Math.random() * 2 * Math.PI,
      velocity: 1
    };
  },

  move: function(obj, progress) {
    const speed = 0.05;
    const wallIntersect = 0.66;

    let dx = progress * speed * obj.velocity * Math.cos(obj.angle);
    let dy = progress * speed * obj.velocity * Math.sin(obj.angle);

    if (
      dx + obj.x + obj.radius * wallIntersect > this.canvas.width ||
      dx + obj.x - obj.radius * wallIntersect < 0
    ) {
      if (this.bounce) obj.angle = Math.PI - obj.angle;

      dx = 0;
    }

    if (
      dy + obj.y + obj.radius * wallIntersect > this.canvas.height ||
      dy + obj.y - obj.radius * wallIntersect < 0
    ) {
      if (this.bounce) obj.angle = 2 * Math.PI - obj.angle;

      dy = 0;
    }

    obj.x += dx;
    obj.y += dy;
  },

  draw: function(cyl) {
    this.ctx.beginPath();
    this.ctx.fillStyle = cyl.color;
    this.ctx.arc(cyl.x, cyl.y, cyl.radius, 0, 2 * Math.PI);
    this.ctx.fill();

    drawDebug(cyl);
  }
};

function drawDebug(cyl) {
  if (Cyl.showDebug) {
    const data = `id: ${cyl.id}, x: ${cyl.x.toFixed(0)}, y: ${cyl.y.toFixed(
      0
    )}, a: ${cyl.angle.toFixed(2)}`;

    Cyl.ctx.fillText(data, 10, 15 + 15 * cyl.id);
  }
}
