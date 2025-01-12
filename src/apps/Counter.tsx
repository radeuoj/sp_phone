import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div style={{
      backgroundColor: "purple",
      width: "100%",
      height: "100%",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      flexDirection: "column",
    }}>
      <p style={{
        fontSize: "2em",
      }}>Counter: {count}</p>
      <button onClick={() => {
        setCount((c) => c + 1);
      }}>+++</button>
      <input />
    </div>
  );
}