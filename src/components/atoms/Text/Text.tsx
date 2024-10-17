import React, { MouseEvent, ReactNode } from "react";

import css from "./Text.module.scss";

export enum Tags {
  div = "div",
  span = "span",
  label = "label",
  p = "p",
  h1 = "h1",
  h2 = "h2",
  h3 = "h3",
  h4 = "h4",
  h5 = "h5",
  h6 = "h6",
}

export type TextProps = {
  className?: string;
  id?: string;
  htmlFor?: string;
  Tag?: Tags;
  tagToReplace?: Tags;
  text?: string;
  style?: React.CSSProperties;
  onClick?: (evt: MouseEvent) => void;
  children?: ReactNode;
};

const Text = ({
  className,
  id,
  htmlFor,
  Tag = Tags.p,
  text,
  style,
  onClick = () => null,
  children,
}: TextProps) => {
  // console.log("text: ", text);

  return (
    <Tag
      className={`${css.root}${className ? ` ${className}` : ""}`}
      id={id}
      style={style}
      onClick={onClick}
      htmlFor={htmlFor}
    >
      {children || text}
      {/* XXXXXX */}
    </Tag>
  );
};

export default Text;
