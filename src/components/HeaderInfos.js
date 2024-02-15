import React from "react";

const HeaderInfos = ({ points }) => {
  return (
    <div>
      <h3>Try to discover the main keywords used in JavaScript</h3>
      <p>Found keywords {points}/50</p>
    </div>
  );
};

export default HeaderInfos;
