import { DependencyList, useEffect, useRef } from "react";

const useDidMountEffect = (
  callback: () => any,
  deps: DependencyList = [],
): void => {
  const didMount = useRef(false);

  useEffect(() => {
    if (didMount.current) {
      callback();
    } else {
      didMount.current = true;
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [...deps]);
};

export default useDidMountEffect;
