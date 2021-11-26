import React from "react";
import PieChart from "../Components/PieChart";

/**
 * The Arc component
 *
 * @returns {Node}
 */
const Arc = () => {
  // States
  const [value1, setValue] = React.useState("");
  const [value2, setValue2] = React.useState("");

  /**
   * Handle Input 1
   *
   * @param {Object} event
   */
  const handleArc1 = ({ target }) => {
    const { value = "" } = target || {};
    setValue(value);
  };
  /**
   * Handle Input 2
   *
   * @param {Object} event
   */
  const handleArc2 = ({ target }) => {
    const { value = "" } = target || {};

    setValue2(value);
  };
  return (
    <>
      {/* Pie-chart component */}
      <PieChart value2={Number(value2)} value1={Number(value1)} />;
      <div className="inputBoxed">
        <input
          name="input-1"
          type="number"
          className="form-control"
          placeholder="Enter first Input"
          value1={value1}
          onChange={handleArc1}
          style={{ marginRight: "10px" }}
        />
        <input
          type="number"
          name="input-2"
          className="form-control"
          placeholder="Enter second input"
          value1={value2}
          onChange={handleArc2}
        />
      </div>
    </>
  );
};
export default Arc;
