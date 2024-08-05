// https://react.dev/learn/scaling-up-with-reducer-and-context#moving-all-wiring-into-a-single-file
import React, {
  createContext,
  useContext as useContextLib,
  useReducer,
} from "react";

const Context = createContext<any>(null);
export const useContext = (): any => useContextLib(Context);

const ContextDispatch = createContext<any>(null);
export const useContextDispatch = (): any => useContextLib(ContextDispatch);

const ContextProvider = ({ children, reducer, initialData }: any) => {
  const [state, dispatch] = useReducer(reducer, initialData);

  return (
    <Context.Provider value={state}>
      <ContextDispatch.Provider value={dispatch}>
        {children}
      </ContextDispatch.Provider>
    </Context.Provider>
  );
};

export default ContextProvider;
