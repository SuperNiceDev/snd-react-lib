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
    <div>
      <code>{`<UseDidMountEffectDemo>`}</code>
      <div>
        <button
          // className="py-1 px-3 text-white_ text-gray-100 bg-fuchsia-800 rounded-sm"
          className={className}
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
