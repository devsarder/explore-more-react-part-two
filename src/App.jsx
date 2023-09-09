import Counter from "./Counter";
import Friends from "./Friends";

function App() {
  const AddFive = (num) => {
    alert(num * 5);
  };
  return (
    <>
      <Friends></Friends>
      <Counter></Counter>
      <h2>hello</h2>
      <button onClick={() => AddFive(5)}>click me multiply</button>
    </>
  );
}

export default App;
