import React, { useState } from "react";

import { useContextBaseDispatch } from "@src/context/ContextBase";

export default function AddTask() {
  const [text, setText] = useState("");
  const dispatch = useContextBaseDispatch();

  console.log("AddTask()");

  return (
    <>
      <input
        className="tw-text-red-900"
        placeholder="Add task"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button
        className="tw-border tw-border-white tw-rounded tw-px-2"
        onClick={() => {
          setText("");
          dispatch({
            type: "added",
            id: nextId++,
            text: text,
          });
        }}
      >
        Add
      </button>
    </>
  );
}

let nextId = 3;
