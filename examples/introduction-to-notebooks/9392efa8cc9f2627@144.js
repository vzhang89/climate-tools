// https://observablehq.com/@mbostock/randomized-flood-fill@144
function _1(md){return(
md`# Randomized Flood Fill

For each iteration, a point on the fringe is chosen randomly. Any of the four neighbors of the chosen point that are empty are assigned a similar color and added to the fringe.`
)}

function _replay(html){return(
html`<button>Replay`
)}

function* _canvas(replay,width,height,DOM)
{
  replay;

  const w = width + 28, h = height;
  const context = DOM.context2d(w, h, 1);
  const image = context.getImageData(0, 0, w, h);
  const indexes = [];
  let frame = 0;

  context.canvas.style.margin = "0 -14px";
  context.canvas.style.imageRendering = "pixelated";
  visit(w >> 1, h >> 1, 128, 128, 128);

  function visit(x, y, r, g, b) {
    if (x < 0 || x >= w || y < 0 || y >= h) return;
    const i = y * w + x, j = i << 2;
	if (image.data[j + 3] === 0) {
      image.data[j + 0] = r + (Math.random() < 0.5 ? -1 : 1);
      image.data[j + 1] = g + (Math.random() < 0.5 ? -1 : 1);
      image.data[j + 2] = b + (Math.random() < 0.5 ? -1 : 1);
      image.data[j + 3] = 255;
      indexes.push(i);
    }
  }
  
  while (indexes.length) {
    const i = Math.random() * indexes.length | 0;
    const j = indexes[i];
    const k = indexes.pop();
    if (i < indexes.length) indexes[i] = k;
    
    const r = image.data[(j << 2) + 0];
    const g = image.data[(j << 2) + 1];
    const b = image.data[(j << 2) + 2];
    const x = j % w, y = j / w | 0;
    visit(x - 1, y, r, g, b);
    visit(x + 1, y, r, g, b);
    visit(x, y - 1, r, g, b);
    visit(x, y + 1, r, g, b);
    
    if (!(++frame % 1000)) {
      context.putImageData(image, 0, 0);
      yield context.canvas;
    }
  }

  context.putImageData(image, 0, 0);
  yield context.canvas;
}


function _height(){return(
600
)}

export default function define(runtime, observer) {
  const main = runtime.module();
  main.variable(observer()).define(["md"], _1);
  main.variable(observer("viewof replay")).define("viewof replay", ["html"], _replay);
  main.variable(observer("replay")).define("replay", ["Generators", "viewof replay"], (G, _) => G.input(_));
  main.variable(observer("canvas")).define("canvas", ["replay","width","height","DOM"], _canvas);
  main.variable(observer("height")).define("height", _height);
  return main;
}
