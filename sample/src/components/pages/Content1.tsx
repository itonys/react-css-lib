import { useState } from "react";
import "@/App.css";
import Layout from "@/components/pattern/Layout";

function Content1() {
  const [count, setCount] = useState(0);
  return (
    <Layout>
      <div>
        <h2>Top content</h2>
        <p>sample text</p>
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
    </Layout>
  );
}

export default Content1;
