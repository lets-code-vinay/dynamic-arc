import React from "react";
import { number } from "prop-types";

import CanvasJSReact from "../../assets/canvasjs.react";
var CanvasJSChart = CanvasJSReact.CanvasJSChart;
/**
 * Pie-chart component
 *
 * @param {String} values
 * @returns  {Node}
 */
const PieChart = ({ value1 = 90, value2 = 90 }) => {
  const options = {
    title: {
      text: "Dynamic Arc",
    },

    data: [
      {
        type: "pie",
        startAngle: 0,
        indexLabelFontSize: 16,
        dataPoints: [
          { y: 180 },
          { y: Number(value1) || 0 },
          { y: Number(value2) || 0 },
          { y: Number(180 - (value1 + value2) || 0) },
        ],
      },
    ],
  };

  return (
    <div>
      <CanvasJSChart width="400" height="400" options={options} />
    </div>
  );
};
// Props validations
PieChart.propTypes = {
  value1: number,
  value2: number,
};

// Props validations
PieChart.defaultProp = {
  value1: 90,
  value2: 90,
};

export default PieChart;
