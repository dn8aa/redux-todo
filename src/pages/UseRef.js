//!form focus eg
// import React, { useRef } from "react";

// function UseRef() {
//   const inputEl = useRef(null);
//   const onButtonClick = () => {
//     // `current` указывает на смонтированный элемент `input`
//     inputEl.current.focus();
//   };
//   return (
//     <>
//       <input ref={inputEl} type="text" />
//       <button onClick={onButtonClick}>Установить фокус на поле ввода</button>
//     </>
//   );
// }

// export default UseRef;

//!form submition eg

// import React, { useRef } from "react";

// function UseRef() {
//   const inputRef = useRef(null);

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     console.log("Input value:", inputRef.current.value);

//   console.log(inputRef);
//   };

//   console.log(inputRef);

//   return (
//     <form onSubmit={handleSubmit}>
//       <input type="text" ref={inputRef} />
//       <button type="submit">Submit</button>
//     </form>
//   );
// }
// export default UseRef;

//!size eg

// import React, { useRef, useState, useEffect } from "react";

// function UseRef() {
//   const nodeRef = useRef(null);
//   const [style, setStyle] = useState({});

//   useEffect(() => {
//     const node = nodeRef.current;
//     if (node) {
//       const { width, height } = node.getBoundingClientRect();
//       setStyle({ width, height });
//     }
//   }, [nodeRef]);

//   return (
//     <div ref={nodeRef} style={style}>
//       ...
//     </div>
//   );
// }
// export default UseRef;

//!eg with timer
// import React, { useRef, useState, useEffect } from "react";

// function UseRef() {
//   const [count, setCount] = useState(0);
//   const intervalRef = useRef(null);

//   useEffect(() => {
//     intervalRef.current = setInterval(() => {
//       setCount((c) => c + 1);
//     }, 1000);
//     return () => clearInterval(intervalRef.current);
//   }, []);

//   return <div>{count}</div>;
// }
// export default UseRef;

//! возвращенный объект будет сохранен на протяжении всей жизни компонента

import React, { useEffect, useState, useRef } from "react";

const UseRef = () => {
  const obj1 = { hi: 100 };
  const obj2 = useRef({ hi: 100 });
  // const obj2 = {hi: 100}
  console.log(obj1 === obj2.current);

  const [state, setState] = useState(() => {
    return 1;
  });

  useEffect(() => {
    console.log("obj1 changed | ", obj1);
  }, [obj1]);

  useEffect(() => {
    console.log("obj2 changed | ", obj2.current);
  }, [obj2]);

  return (
    <div
      onClick={() => {
        setState((value) => {
          return value + 1;
        });
      }}
      className="w-screen h-screen flex justify-center items-center text-4xl font-extralight"
    >
      {state}
    </div>
  );
};

export default UseRef;
