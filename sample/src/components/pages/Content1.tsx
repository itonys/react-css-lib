import { useState } from "react";
import "@/App.css";

function Content1() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <h2>Top content</h2>
      <p>sample text1</p>
      <button onClick={() => setCount((count) => count + 1)}>
        count is {count}
      </button>
    </div>
  );
}

export default Content1;
