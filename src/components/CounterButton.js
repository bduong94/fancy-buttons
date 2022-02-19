import React from "react";

const CounterButton = (props) => {
  return (
    <button className="AngryButton">
      {/* When the threshold is not reached */}
      <span>Don't click me too much!</span>
      {/* When the threshold is not reached */}
      <span>Rawr!</span>
    </button>
  );
};

export default CounterButton;
