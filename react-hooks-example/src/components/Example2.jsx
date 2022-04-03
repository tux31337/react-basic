import React from "react";

const Example2 = () => {
  const [count, setCount] = React.useState(0);

  const click = () => {
    setCount(count + 1);
  };
  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={click}>Click me</button>
    </div>
  );
};

export default Example2;
