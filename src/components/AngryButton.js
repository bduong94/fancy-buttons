import React, { useState } from "react";

const AngryButton = (props) => {
  const [anger, setAnger] = useState(0);
  return (
    <button
      style={{ backgroundColor: `rgba(255,0,0,${anger})` }}
      className="CounterButton"
    >
      {anger < 1 && <span>Don't click me too much!</span>}

      {anger > 1 && <span>Rawr!</span>}
    </button>
  );
};

export default AngryButton;
