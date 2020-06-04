import "./styles.css";

import { Game } from "./game";
import { Canvas } from "./canvas";
import { Cyl } from "./cyl";

import { Utilities } from "./utilities";
import { Numerics } from "./numerics";
import { Geometry } from "./geometry";

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
