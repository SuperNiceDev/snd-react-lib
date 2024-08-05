import React, { useState } from "react";

import { useContextDispatch } from "../../../context/ContextProvider";

export default function AddTask() {
  const [text, setText] = useState("");
  const dispatch = useContextDispatch();

  console.log("AddTask()");

  return (
    <>
      <input
        placeholder="Add task"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button
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
