// https://react.dev/learn/scaling-up-with-reducer-and-context#moving-all-wiring-into-a-single-file
import React, { createContext, useContext, useReducer } from "react";

const Context = createContext<any>(null);
export const useBaseContext = (): any => useContext(Context);

const ContextDispatch = createContext<any>(null);
export const useContextBaseDispatch = (): any => useContext(ContextDispatch);

export const ContextBaseProvider = ({
  reducer,
  initialData,
  children,
}: any) => {
  const [state, dispatch] = useReducer(reducer, initialData);

  return (
    <Context.Provider value={state}>
      <ContextDispatch.Provider value={dispatch}>
        {children}
      </ContextDispatch.Provider>
    </Context.Provider>
  );
};
