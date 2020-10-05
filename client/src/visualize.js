import d3 from 'd3';

const visualize = function () {
  // wrap SVG element with d3
const svg = d3.select('#container');

// select the first path in the svg selection
const select = svg.select('path');

// select all the paths in the svg selction
const selectAll = svg.selectAll('path');

return svg;
}

export default visualize;