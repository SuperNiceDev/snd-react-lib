import React, { useState } from "react";

import useDidMountEffect from "snd-react-lib/hooks/useDidMountEffect";

type Props = {
  className?: string;
};

const UseDidMountEffectDemo = ({ className }: Props) => {
  const [count, setCount] = useState(0);
  const [logs, setLogs] = useState<string[]>([]);

  useDidMountEffect(() => {
    setLogs((prev) => [...prev, `Callback fired at count=${count}`]);
  }, [count]);

  return (
    <div className={`UseDidMountEffectDemo${className ? ` ${className}` : ""}`}>
      <code>{`<UseDidMountEffectDemo>`}</code>
      <div>
        <button
          className="cursor-pointer rounded-md border bg-[var(--foreground)] px-3 py-1 text-[var(--background)]"
          onClick={() => setCount((prev) => prev + 1)}
        >
          Increment
        </button>
      </div>
      <p>Count: {count}</p>
      <p>Logs:</p>
      <ul>
        {logs.map((log, idx) => (
          <li key={idx}>{log}</li>
        ))}
      </ul>
      <code>{`</UseDidMountEffectDemo>`}</code>
    </div>
  );
};

export default UseDidMountEffectDemo;
