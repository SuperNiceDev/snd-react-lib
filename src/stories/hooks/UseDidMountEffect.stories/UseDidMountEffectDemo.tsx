// components/UseDidMountEffectDemo.tsx
import React, { useState } from "react";

import useDidMountEffect from "snd-react-lib/hooks/useDidMountEffect";

const UseDidMountEffectDemo = () => {
  const [count, setCount] = useState(0);
  const [logs, setLogs] = useState<string[]>([]);

  useDidMountEffect(() => {
    setLogs((prev) => [...prev, `Callback fired at count=${count}`]);
  }, [count]);

  return (
    <div>
      <h2>useDidMountEffect Demo</h2>
      <p>Count: {count}</p>
      <button onClick={() => setCount((c) => c + 1)}>Increment Count</button>
      <h4>Logs:</h4>
      <ul>
        {logs.map((log, idx) => (
          <li key={idx}>{log}</li>
        ))}
      </ul>
    </div>
  );
};

export default UseDidMountEffectDemo;
