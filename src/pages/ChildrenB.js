import React from "react";

function ChildrenB({ value, handleClick }) {
  console.log("ChildrenB");
  return (
    <div>
      ChildrenB {value}
      <button className="bg-gray-200 p-2 m-2" onClick={handleClick}>
        Click
      </button>
    </div>
  );
}
export default React.memo(ChildrenB);
