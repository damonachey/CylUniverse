import { Game } from "./game.js";
import { Canvas } from "./canvas.js";
import { Cyl } from "./cyl.js";

import { Utilities } from "./utilities.js";
import { Numerics } from "./numerics.js";
import { Geometry } from "./geometry.js";

function observe(cyl) {}

function orient(cyl) {}

function decide(cyl) {
  cyl.angle += (Math.random() - 0.5) / 2;
  cyl.angle %= 2 * Math.PI;
}

function act(cyl, progress) {
  Cyl.move(cyl, progress);
}

function draw() {
  Canvas.clear("#444");

  for (const cyl of cyls) Cyl.draw(cyl);
}

function update(progress) {
  for (const cyl of cyls) observe(cyl);
  for (const cyl of cyls) orient(cyl);
  for (const cyl of cyls) decide(cyl);
  for (const cyl of Utilities.shuffle(cyls)) act(cyl, progress);
}

Game.initialize("canvas");
Canvas.initialize("canvas");

Cyl.initialize("canvas");
const cyls = [];
cyls.push(Cyl.create("#f00"));
cyls.push(Cyl.create("#0f0"));
cyls.push(Cyl.create("#00f"));

Game.run(update, draw);
