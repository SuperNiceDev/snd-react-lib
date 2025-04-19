import React, { useState } from "react";

import {
  useBaseContext,
  useContextBaseDispatch,
} from "../../../context/ContextBase";

export default function TaskList() {
  const tasks = useBaseContext();

  console.log("TaskList()");

  return (
    <ul>
      {tasks.map((task: any) => (
        <li key={task.id}>
          <Task task={task} />
        </li>
      ))}
    </ul>
  );
}

function Task({ task }: any) {
  const [isEditing, setIsEditing] = useState(false);
  const dispatch = useContextBaseDispatch();
  let taskContent;

  if (isEditing) {
    taskContent = (
      <>
        <input
          value={task.text}
          onChange={(e) => {
            dispatch({
              type: "changed",
              task: {
                ...task,
                text: e.target.value,
              },
            });
          }}
        />
        <button
          className="tw-border tw-border-white tw-rounded tw-px-2"
          onClick={() => setIsEditing(false)}
        >
          Save
        </button>
      </>
    );
  } else {
    taskContent = (
      <>
        {task.text}
        <button
          className="tw-border tw-border-white tw-rounded tw-px-2"
          onClick={() => setIsEditing(true)}
        >
          Edit
        </button>
      </>
    );
  }

  return (
    <label>
      <input
        type="checkbox"
        checked={task.done}
        onChange={(e) => {
          dispatch({
            type: "changed",
            task: {
              ...task,
              done: e.target.checked,
            },
          });
        }}
      />
      {taskContent}
      <button
        className="tw-border tw-border-white tw-rounded tw-px-2"
        onClick={() => {
          dispatch({
            type: "deleted",
            id: task.id,
          });
        }}
      >
        Delete
      </button>
    </label>
  );
}
