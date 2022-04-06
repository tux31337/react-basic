import React from "react";

const Example5 = () => {
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    console.log("componentDidMount");
  }, []); //defendency에 맞을때 이안에 있는 함수를 실행한다.

  React.useEffect(() => {
    console.log("componentDidMount");

    return () => {
      //cleanup :dependecny에 의해 다은 랜더가 실행되기 직전에 이부분을 실행후 위에껄 실행
      //componentWullUnmount : 지금은 사라질때 만 실행
    };
  }, []);

  React.useEffect(() => {
    console.log("componentDidMount & componentDidUpdate by Count", count);

    return () => {
      //cleanup 이전 defendency값으로 실행
      console.log("cleanup by count", count);
    };
  }, [count]);

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

export default Example5;
