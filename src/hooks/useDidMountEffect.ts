import { DependencyList, useEffect, useRef } from "react";

const isEnvDev = process.env.NODE_ENV === "development";
// console.log("useDidMountEffect() isEnvDev: ", isEnvDev);
const useDidMountEffect = (
  callback: () => void,
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
  }, deps);
};
export default isEnvDev ? useDidMountEffect : useEffect;
// import { DependencyList, useEffect, useRef } from "react";

// const useDidMountEffect = (
//   callback: () => void,
//   deps: DependencyList = [],
// ): void => {
//   const didMount = useRef(false);

//   useEffect(() => {
//     if (didMount.current) {
//       callback();
//     } else {
//       didMount.current = true;
//     }
//     // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, deps);
// };

// const exportedHook =
//   process.env.NODE_ENV === "development" ? useDidMountEffect : useEffect;

// export default exportedHook;
