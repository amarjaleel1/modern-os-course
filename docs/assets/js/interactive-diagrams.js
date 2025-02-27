document.addEventListener("DOMContentLoaded", function() {
  // Create SVG container for interactive diagrams
  const svgContainer = d3.select("#interactive-diagrams")
    .append("svg")
    .attr("width", 800)
    .attr("height", 600);

  // Example: Visualize process management with a state diagram
  const processStates = ["New", "Ready", "Running", "Waiting", "Terminated"];
  const stateColors = ["#ffcc00", "#66cc66", "#ff6666", "#66ccff", "#cccccc"];

  const stateCircles = svgContainer.selectAll("circle")
    .data(processStates)
    .enter()
    .append("circle")
    .attr("cx", (d, i) => 100 + i * 150)
    .attr("cy", 300)
    .attr("r", 50)
    .attr("fill", (d, i) => stateColors[i]);

  const stateLabels = svgContainer.selectAll("text")
    .data(processStates)
    .enter()
    .append("text")
    .attr("x", (d, i) => 100 + i * 150)
    .attr("y", 300)
    .attr("dy", ".35em")
    .attr("text-anchor", "middle")
    .text(d => d);

  // Example: Visualize memory allocation with rectangles
  const memoryBlocks = [
    { id: "Block 1", size: 100, color: "#ffcc00" },
    { id: "Block 2", size: 200, color: "#66cc66" },
    { id: "Block 3", size: 150, color: "#ff6666" },
    { id: "Block 4", size: 250, color: "#66ccff" }
  ];

  const memoryRectangles = svgContainer.selectAll("rect")
    .data(memoryBlocks)
    .enter()
    .append("rect")
    .attr("x", 50)
    .attr("y", (d, i) => 50 + i * 100)
    .attr("width", d => d.size)
    .attr("height", 50)
    .attr("fill", d => d.color);

  const memoryLabels = svgContainer.selectAll(".memory-label")
    .data(memoryBlocks)
    .enter()
    .append("text")
    .attr("class", "memory-label")
    .attr("x", 10)
    .attr("y", (d, i) => 75 + i * 100)
    .attr("dy", ".35em")
    .text(d => d.id);
});
