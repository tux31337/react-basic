import "./App.css";
import Example1 from "./components/Example1";
import Example2 from "./components/Example2";
import Example3 from "./components/Example3";
import Example4 from "./components/Example4";
import Example5 from "./components/Example5";
import useWindowWidth from "./hooks/useWindowWidth";

function App() {
  const width = useWindowWidth();

  return (
    <div className="App">
      <Example1 />
      <Example2 />
      <Example3 />
      <Example4 />
      <Example5 />
      {width}
    </div>
  );
}

export default App;
