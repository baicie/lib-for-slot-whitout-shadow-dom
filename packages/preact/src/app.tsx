import { useState } from "preact/hooks";
export function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <text-section
        heading={<span>Nice heading</span>}
        content2={<span>Great content2</span>}
        content={<span>Awesome content content</span>}
      ></text-section>
    </>
  );
}
