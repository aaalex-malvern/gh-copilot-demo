import * as d3 from "d3";
import * as React from "react";

// load the data from a json file and create the d3 svg in the then function
export function loadDataAndCreateViz(
  filePath: string,
  svgRef: React.RefObject<SVGSVGElement>,
  width: number,
  height: number
) {
  d3.json(filePath).then((data) => {
    createViz(data, svgRef, width, height);
  });
}

// create the d3 svg and append it to the svgRef
function createViz(
  data: any,
  svgRef: React.RefObject<SVGSVGElement>,
  width: number,
  height: number
) {
  const svg = d3.select(svgRef.current);

  // clear the svg before creating the new viz
  svg.selectAll("*").remove();

  // create a group for the circles
  const circlesGroup = svg.append("g").attr("class", "circles-group");

  // create a circle for each data point
  circlesGroup
    .selectAll("circle")
    .data(data)
    .enter()
    .append("circle")
    .attr("cx", (d: any) => d.x * width)
    .attr("cy", (d: any) => d.y * height)
    .attr("r", 5)
    .attr("fill", "steelblue");
} 

// create the scales for the x and y axis
// x-axis are the month series and y-axis show the numbers of album selled
export function createScales(data: any, width: number, height: number) {
  const xScale = d3
    .scaleLinear()
    .domain([0, Number(d3.max(data, (d: any) => d.x) ?? 0)])
    .range([0, width]);

  const yScale = d3
    .scaleLinear()
    .domain([0, Number(d3.max(data, (d: any) => d.y) ?? 0)])
    .range([height, 0]);

  return { xScale, yScale };
}

// generate a line chart based on the albums sales data
export function createLineChart(
  data: any,
  svgRef: React.RefObject<SVGSVGElement>,
  width: number,
  height: number
) {
  const svg = d3.select(svgRef.current);

  // clear the svg before creating the new viz
  svg.selectAll("*").remove();

  const { xScale, yScale } = createScales(data, width, height);

  const line = d3
    .line()
    .x((d: any) => xScale(d.x))
    .y((d: any) => yScale(d.y));

  svg
    .append("path")
    .datum(data)
    .attr("fill", "none")
    .attr("stroke", "steelblue")
    .attr("d", line);
}