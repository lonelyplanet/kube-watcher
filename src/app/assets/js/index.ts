
const io = window.io;
const d3 = window.d3;

var socket = io("http://localhost:3000");
socket.on("connect", function() {
  console.log("oh hai");
});

const pods = [];
socket.on("pod.add", function(data) {
  pods.push(data);
  console.log(data);
});
socket.on("disconnect", function() {

});



// svg.select(".nodes").remove();

//   var node = svg.select("g")
//   .attr("class", "nodes")
//   .data(pods)
//   .enter()
//     .append("circle")
//     .attr("r", 10)
//     .attr("fill", "red");

//   simulation.restart();

// var svg = d3.select("svg"),
//     width = +svg.attr("width"),
//     height = +svg.attr("height");

// var nodes_data =  [
//   {"name": "Travis", "sex": "M"},
//   {"name": "Rake", "sex": "M"},
//   {"name": "Diana", "sex": "F"},
//   {"name": "Rachel", "sex": "F"},
//   {"name": "Shawn", "sex": "M"},
//   {"name": "Emerald", "sex": "F"}
// ]

// //set up the simulation
// //nodes only for now
// var simulation = d3.forceSimulation()
//   //add nodes
//   .nodes(pods);

// //add forces
// //we're going to add a charge to each node
// //also going to add a centering force
// simulation
//   .force("charge", d3.forceManyBody().strength(-1000))
//   .force("center", d3.forceCenter(width / 2, height / 2));

// // draw circles for the nodes
// var node = svg.append("g")
//   .attr("class", "nodes")
//   .selectAll("circle")
//   .data(pods)
//   .enter()
//     .append("circle")
//     .attr("r", 10)
//     .attr("fill", "red");

// //add tick instructions:
// simulation.on("tick", tickActions);


// //Time for the links
// //Create links data
// var links_data = [
// 	{"source": "Travis", "target": "Rake"},
//   {"source": "Diana", "target": "Rake"},
//   {"source": "Diana", "target": "Rachel"},
//   {"source": "Rachel", "target": "Rake"},
//   {"source": "Rachel", "target": "Shawn"},
//   {"source": "Emerald", "target": "Rachel"}
// ];

// //Create the link force
// //We need the id accessor to use named sources and targets
// var link_force = d3.forceLink(links_data)
//   .id(function(d) { return d.name; })

// //Add a links force to the simulation
// //Specify links  in d3.forceLink argument
// simulation.force("links", link_force)

// //draw lines for the links
// var link = svg.append("g")
//   .attr("class", "links")
//   .selectAll("line")
//   .data(links_data)
//   .enter().append("line")
//     .attr("stroke-width", 2);

// function tickActions() {
//   if (!pods.length) return true;
//   //update circle positions each tick of the simulation
//   node
//       .attr("cx", function(d) { return d.x; })
//       .attr("cy", function(d) { return d.y; });

//   //update link positions
//   //simply tells one end of the line to follow one node around
//   //and the other end of the line to follow the other node around
//   // link
//   //     .attr("x1", function(d) { return d.source.x; })
//   //     .attr("y1", function(d) { return d.source.y; })
//   //     .attr("x2", function(d) { return d.target.x; })
//   //     .attr("y2", function(d) { return d.target.y; });
// }

// const svg = d3.select("svg");
// const width = +svg.attr("width");
// const height = +svg.attr("height");

// const color = d3.scaleOrdinal(d3.schemeCategory20);

// const simulation = d3.forceSimulation()
//   .force("link", d3.forceLink().id((d) => d.id ))
//   .force("charge", d3.forceManyBody())
//   .force("center", d3.forceCenter(width / 2, height / 2));

// let podsNode = svg.append("g")
//   .attr("class", "pods");

// function ticked() {
//   // link
//   //     .attr("x1", function(d) { return d.source.x; })
//   //     .attr("y1", function(d) { return d.source.y; })
//   //     .attr("x2", function(d) { return d.target.x; })
//   //     .attr("y2", function(d) { return d.target.y; });

//   podsNode
//     .selectAll("circle")
//       .attr("cx", function(d) { return d.x; })
//       .attr("cy", function(d) { return d.y; });
// }

// simulation
//     .on("tick", ticked);

// function restart() {
//   podsNode = podsNode.data(pods, (d) => {
//     console.log(d);
//     return d.object.metadata.name;
//   });
//   podsNode.exit().remove();

//   podsNode.data(pods)
//     .enter()
//       .append("circle")
//       .attr("r", 5)
//       .attr("fill", "red")
//       .exit()
//     .append("text")
//       .attr("dx", function(d){ return -20; })
//       .text((d) => d.object.metadata.name);

//   simulation.nodes(pods);
// }

// d3.json("miserables.json", function(error, graph) {
//   if (error) throw error;

//   // var link = svg.append("g")
//   //     .attr("class", "links")
//   //   .selectAll("line")
//   //   .data(graph.links)
//   //   .enter().append("line")
//   //     .attr("stroke-width", function(d) { return Math.sqrt(d.value); });

//   var node = svg.append("g")
//       .attr("class", "nodes")
//     .selectAll("circle")
//     .data(graph.nodes)
//     .enter().append("circle")
//       .attr("r", 5)
//       .attr("fill", function(d) { return color(d.group); })
//       .call(d3.drag()
//           .on("start", dragstarted)
//           .on("drag", dragged)
//           .on("end", dragended));

//   node.append("title")
//       .text(function(d) { return d.id; });

  // simulation
  //     .nodes(graph.nodes)
  //     .on("tick", ticked);

//   simulation.force("link")
//       .links(graph.links);

//   function ticked() {
//     link
//         .attr("x1", function(d) { return d.source.x; })
//         .attr("y1", function(d) { return d.source.y; })
//         .attr("x2", function(d) { return d.target.x; })
//         .attr("y2", function(d) { return d.target.y; });

//     node
//         .attr("cx", function(d) { return d.x; })
//         .attr("cy", function(d) { return d.y; });
//   }
// });

// function dragstarted(d) {
//   if (!d3.event.active) simulation.alphaTarget(0.3).restart();
//   d.fx = d.x;
//   d.fy = d.y;
// }

// function dragged(d) {
//   d.fx = d3.event.x;
//   d.fy = d3.event.y;
// }

// function dragended(d) {
//   if (!d3.event.active) simulation.alphaTarget(0);
//   d.fx = null;
//   d.fy = null;
// }
