import * as React from "react";
import Layout from "./layouts/main";

export default function Home() {
  return (
    <Layout>
      <style>{`
      .links line {
        stroke: #999;
        stroke-opacity: 0.6;
      }

      .nodes circle {
        stroke: #fff;
        stroke-width: 1.5px;
      `}
      </style>
      <svg width="960" height="600"></svg>
      <script src="https://d3js.org/d3.v4.min.js"></script>
      <script src="/socket.io/socket.io.js"></script>
      <script src="/js/index.js"></script>
    </Layout>
  );
}
