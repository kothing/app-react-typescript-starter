import React from "react";
import "./style.css";

interface SvgProps {
  small?: boolean;
}

interface Props extends SvgProps {}

export const LoadingIndicator = (props: Props) => (
  <svg viewBox="-24 -24 48 48" className={props.small ? "small" : ""}>
    <circle cx="0" cy="0" r="20" fill="none" strokeWidth="4"></circle>
  </svg>
);
