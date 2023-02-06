import React from "react";

function ChildrenA({ value, handleClick }) {
  console.log("ChildrenA");
  return (
    <div>
      ChildrenA {value}
      <button className="bg-gray-200 p-2 m-2" onClick={handleClick}>
        Click
      </button>
    </div>
  );
}

export default React.memo(ChildrenA);
