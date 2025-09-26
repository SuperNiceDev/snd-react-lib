import { type ClassValue } from "clsx";
import { cn } from "snd-react-lib/utils/tailwind/cn";

const DELIMITER = process.env.REACT_CLASSNAME_DELIMITER || "";

export function cnCmp(componentName: string, ...inputs: ClassValue[]) {
  return cn(
    {
      [`${DELIMITER}${componentName}${DELIMITER}`]:
        process.env.NODE_ENV === "development",
    },
    ...inputs,
  );
}
