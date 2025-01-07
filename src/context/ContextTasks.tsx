import React from "react";

import { ContextBaseProvider } from "@src/context/ContextBase";

const initialData = [
  { id: 0, text: "Philosopher´s Path", done: true },
  { id: 1, text: "Visit the temple", done: false },
  { id: 2, text: "Drink matcha", done: false },
];

const reducer = (tasks: any, action: any) => {
  switch (action.type) {
    case "added": {
      return [
        ...tasks,
        {
          id: action.id,
          text: action.text,
          done: false,
        },
      ];
    }
    case "changed": {
      return tasks.map((t: any) => {
        if (t.id === action.task.id) {
          return action.task;
        } else {
          return t;
        }
      });
    }
    case "deleted": {
      return tasks.filter((t: any) => t.id !== action.id);
    }
    default: {
      throw Error("Unknown action: " + action.type);
    }
  }
};

export const ContextTasksProvider = ({ children }: any) => {
  return (
    <ContextBaseProvider initialData={initialData} reducer={reducer}>
      {children}
    </ContextBaseProvider>
  );
};
