import React from "react";

const Example3 = () => {
  const [state, setState] = React.useState({ count: 0 });

  const click = () => {
    setState((state) => {
      return {
        count: state.count + 1,
      };
    });
  };
  return (
    <div>
      <p>You clicked {state.count} times</p>
      <button onClick={click}>Click me</button>
    </div>
  );
};

export default Example3;
