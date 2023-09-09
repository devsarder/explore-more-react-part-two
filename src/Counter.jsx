import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);
  const handleAdd = () => {
    const updateAdd = count + 1;
    setCount(updateAdd);
  };
const handleReduce = () => {
    const reducing = count - 1;
    setCount(reducing);
};

  return (
    <div style={{padding:'10px', border: "2px solid black", borderRadius: "8px" }}>
      <h3>count:{count}</h3>
      <button onClick={handleAdd}>Add</button>
      <button onClick={handleReduce} style={{marginLeft:'10px'}}>Reduce</button>
    </div>
  );
}
