import React from "react";

export default class Example4 extends React.Component {
  state = { count: 0 };

  render() {
    const { count } = this.state;

    return (
      <div>
        <p>You clicked {count} times</p>
        <button onClick={this.click}>Click me</button>
      </div>
    );
  }

  componentDidMount() {
    //최초 랜더가 된 직후에 실행
    console.log("componentDidMount", this.state.count);
  }

  componentDidUpdate() {
    //update가 된 직후에 호출
    console.log("componentDidUpdate", this.state.count);
  }

  click = () => {
    this.setState({ count: this.state.count + 1 });
  };
}
