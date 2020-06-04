export const Game = {
  showFPS: true,

  initialize: function(canvasId) {
    this.canvas = document.getElementById(canvasId);
    this.ctx = this.canvas.getContext("2d");
  },

  run: function(update, draw) {
    Game.update = update;
    Game.draw = draw;

    window.requestAnimationFrame(loop);
  }
};

let lastRender = 0;

function loop(timestamp) {
  if (!lastRender) lastRender = timestamp;

  const progress = timestamp - lastRender;

  Game.update(progress);
  Game.draw();

  if(Game.showFPS) drawFPS();

  lastRender = timestamp;

  window.requestAnimationFrame(loop);
}

const fpsTimes = [];

function drawFPS() {
  const now = performance.now();

  while(fpsTimes.length > 0 && fpsTimes[0] < now - 1000)
    fpsTimes.shift();

  fpsTimes.push(now);

  Game.ctx.fillStyle = "#fff";
  Game.ctx.fillText(`fps: ${fpsTimes.length}`, Game.canvas.width - 100, 15);
}