// https://observablehq.com/@observablehq/introduction-to-notebooks@363
import define1 from "./4c29238c961f0d53@139.js";
import define2 from "./9392efa8cc9f2627@144.js";

function _1(md){return(
md`# Introduction to Notebooks

This is a *notebook*—an interactive, editable document defined by code. It’s a computer program, but one that’s designed to be easier to read and write by humans.

A notebook can be used as a scratchpad for exploring data, or to explain quantitative phenomena. Because the code runs live in your browser, notebooks are also a powerful medium for studying dynamic systems and algorithms. (See Stephen Wolfram’s [What Is a Computational Essay?](http://blog.stephenwolfram.com/2017/11/what-is-a-computational-essay/) for more.)

Notebooks are comprised of cells. A *cell* can be pretty much anything. For example, a cell might contain a few paragraphs of text, like this one. Or a cell might contain images, videos, charts, or other graphical and interactive elements. A cell can also contain data structures, like numbers, strings, arrays and objects. Functions, too.`
)}

function _image(flood){return(
flood
)}

function _height(){return(
160
)}

function _4(md){return(
md`Each cell, even a simple text cell like this one, is defined by a snippet of code. By default the code is hidden, but the next cell is *pinned* so you can see it. The code has a light gray background, and the cell’s content—the result of running the code—appears above.`
)}

function _5(){return(
`My favorite number is ${2 * 3 * 7}.`
)}

function _6(md,keys,mac){return(
md`If a cell is not pinned, its source is only visible when focused. Click the cell menu <svg viewBox="0 0 8 14" fill="currentColor" stroke="none" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" width="8" height="14"><circle r="1.5" cx="4" cy="2"></circle><circle r="1.5" cx="4" cy="7"></circle><circle r="1.5" cx="4" cy="12"></circle></svg> or anywhere in the left margin to edit the cell. Once you have a cell focused, to edit another cell, either click on that cell’s left margin as before or use ${keys(mac ? "Alt-Tab" : "Alt-Shift-Down")} and ${keys(mac ? "Shift-Alt-Tab" : "Alt-Shift-Up")} to navigate between cells.`
)}

function _7(md,keys){return(
md`All code is editable, so try editing the code above! After making changes, click the play button <svg width="16" height="16" class="db" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round" fill="currentColor"><path d="M4 3L12 8L4 13Z"></path></svg> in the top-right corner of the editor to run the new code, or use the ${keys("Shift-Enter")} keyboard shortcut.

If this were your notebook, your edits would be saved automatically. But when you edit someone else’s notebook, your changes are discarded when you leave; reload the page to discard your changes immediately. If you wish to save your changes, click the fork button at the top to create your own personal copy of this notebook.`
)}

function _8(md,keys){return(
md`To create a cell, click on the inserter button <svg viewBox="0 0 15 15" width="15" height="15" stroke="currentColor" style="stroke-width: 1; stroke-linecap: round;"><line x1="7.5" x2="7.5" y1="2.5" y2="12.5"></line><line y1="7.5" y2="7.5" x1="2.5" x2="12.5"></line></svg> in the left margin between cells. To delete a cell, Shift-click the inserter button to merge it into the adjacent cell. Or use the equivalent keyboard shortcuts: ${keys("Alt-Enter")} and ${keys("Alt-Backspace")}.

You can move cells using ${keys("Alt-Cmd-Up")} and ${keys("Alt-Cmd-Down")}. You can also reorder cells by dragging the cell menu <svg viewBox="0 0 8 14" fill="currentColor" stroke="none" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" width="8" height="14"><circle r="1.5" cx="4" cy="2"></circle><circle r="1.5" cx="4" cy="7"></circle><circle r="1.5" cx="4" cy="12"></circle></svg> in the left margin. If you can’t remember these commands, click on the question mark in the bottom-right corner of the screen, then click on “Keyboard shortcuts” for the full list.`
)}

function _9(md){return(
md`---

## Appendix`
)}

function _keys(html,keysText){return(
s => html`<span style="font-family:var(--sans-serif);font-size:90%;">${keysText(s)}`
)}

export default function define(runtime, observer) {
  const main = runtime.module();
  main.variable(observer()).define(["md"], _1);
  main.variable(observer("image")).define("image", ["flood"], _image);
  main.variable(observer("height")).define("height", _height);
  main.variable(observer()).define(["md"], _4);
  main.variable(observer()).define(_5);
  main.variable(observer()).define(["md","keys","mac"], _6);
  main.variable(observer()).define(["md","keys"], _7);
  main.variable(observer()).define(["md","keys"], _8);
  main.variable(observer()).define(["md"], _9);
  main.variable(observer("keys")).define("keys", ["html","keysText"], _keys);
  const child1 = runtime.module(define1);
  main.import("keys", "keysText", child1);
  main.import("mac", child1);
  const child2 = runtime.module(define2).derive(["height"], main);
  main.import("canvas", "flood", child2);
  return main;
}
