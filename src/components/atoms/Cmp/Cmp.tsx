import React, {
  ComponentProps, // memo,
  MouseEvent,
  useEffect,
  useRef,
  useState,
} from "react";

// import { isEqual } from "lodash-es";
import Text from "../Text";
import css from "./Cmp.module.scss";
import "./Cmp.scss";

// const css = { root: "", ctn: "", primary: "" };

// eslint-disable-next-line
// @ts-ignore

// const log = window.debug("log: Cmp");

export enum Variant {
  BIG = "BIG",
  SMALL = "SMALL",
}

// log("Variant: ", Variant);

type PropsTypeA = {
  propA?: boolean;
};

type PropsTypeB = PropsTypeA & {
  propB?: boolean;
};

// https://www.linkedin.com/pulse/antipattern-overflexible-props-reacttypescript-jonas-herrmannsd%2525C3%2525B6rfer-g4atf/?trackingId=kNByyjdA5gMxeRA%2BRGcu3w%3D%3D
type PropsTypeC = Record<string, unknown>;
type PropsTypeD = { [key: string]: string };
type PropsTypeE = PropsTypeB & ComponentProps<typeof Text>;

export interface ICmpBase {
  className?: string;
  id?: string;
  name?: string;
  primary?: boolean;
  variant?: Variant;
  text?: ComponentProps<typeof Text>;
}

const cmpMap = { type1: () => <div /> };
type CmpType = keyof typeof cmpMap;
const componentType = "type1";
const DynamicCmp = cmpMap[componentType as CmpType] || cmpMap["type1"];
void DynamicCmp;

// type MyFunctionType = (evt: MouseEvent<HTMLElement>) => void;

export interface ICmp extends ICmpBase {
  // onClick?: MyFunctionType;
  // onClick?: (evt: MouseEvent<HTMLElement>) => void;
  onClick?(evt: MouseEvent<HTMLElement>): void;
}

const Cmp = ({
  id,
  name = "not set",
  primary = false,
  className,
  variant,
  onClick,
}: ICmp) => {
  const ref = useRef<HTMLDivElement>(null!);
  void variant;

  // const { key1, ...rest } = {
  //   key1: "key1Value",
  //   key2: "key2Value",
  //   key3: "key3Value",
  // };

  // log("key1: ", key1);
  // log("rest: ", rest);

  const [clicks, setClicks] = useState(0);

  const onClickCb = (evt: MouseEvent<HTMLElement>) => {
    // const dataLayer = window.dataLayer;
    // log("dataLayer: ", dataLayer);
    // const navigator = window.navigator;
    // log("navigator: ", navigator);
    onClick?.(evt);
    setClicks((prev) => (prev += 1));
  };

  // const [clicks2, setClicks2] = useState(1000);

  // useEffect(() => {
  //   setClicks2((prev) => {
  //     log("prev: ", prev);
  //     return prev + clicks;
  //   });
  // }, [clicks]);

  // log("clicks2: ", clicks2);

  const [_id, setId] = useState<string | undefined>("");

  useEffect(() => {
    setId(id);
    // if (id !== _id) {
    //   log("useEffect() id: ", id);
    //   log("useEffect() _id: ", _id);
    //   setId(id);
    // }
    // setId((prev) => {
    //   if (id !== prev) {
    //     log("useEffect() prev: ", prev);
    //     log("useEffect() id: ", id);
    //     return id;
    //   }
    //   return prev;
    // });
  }, [id]);

  // ::::::::: throw Error
  // console.log("name: ", name.name.name);
  // throw new Error("<Cmp> Error");
  // ::::::::: Error

  const clnAdd = className ? ` ${className}` : "";
  const clnPrimary = primary ? ` ${css.primary} primary` : "";
  const cln = `${css.root}${clnPrimary}${clnAdd}`;

  return (
    <div ref={ref} className={cln}>
      <div>{"<Cmp>"}</div>

      <div className={`${css.ctn} ctn`} onClick={onClickCb}>
        <p>{`<Cmp_ctn>`}</p>
        <p>
          {/* &nbsp; &nbsp; {`name: ${name} | id: ${_id} | variant: ${variant}`} */}
          &nbsp; &nbsp; {`name: ${name} | id: ${_id} | variant:`}
        </p>
        <p>
          &nbsp; &nbsp; {`click to count up: `}
          <b className={`bTag`}>{clicks}</b>
          {` clicks`}
        </p>
        <p>{`<Cmp_ctn />`}</p>
      </div>

      <div>{"</Cmp>"}</div>
    </div>
  );
};

export default Cmp;

// const propsAreEqual = (prevProps: any, nextProps: any) =>
//   isEqual(prevProps, nextProps);
// export default memo(Cmp, propsAreEqual);
