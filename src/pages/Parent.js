import React, { useState, useCallback } from "react";

import ChildrenA from "./ChildrenA";
import ChildrenB from "./ChildrenB";
import ChildrenC from "./ChildrenC";

const Parent = () => {
  const [state1, setState1] = useState(0);
  const [state2, setState2] = useState(0);

  const handleClickA = useCallback(() => {
    setState1(state1 + 1);
  }, [state1]);

  const handleClickB = useCallback(() => {
    setState2(state2 + 1);
  }, [state2]);

  return (
    <div className="flex flex-col justify-center items-center">
      <ChildrenA value={state1} handleClick={handleClickA} />
      <ChildrenB value={state2} handleClick={handleClickB} />
      <ChildrenC />
    </div>
  );
};

export default React.memo(Parent);
