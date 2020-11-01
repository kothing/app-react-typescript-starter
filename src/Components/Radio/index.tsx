import React, { memo } from "react";
import "./style.css";

type InputProps = React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>;

interface Props extends InputProps {
  id: string;
  label: string;
  className?: string;
  isSelected?: boolean;
}

export const Radio = memo(
  ({ id, label, className, isSelected, ...restOf }: Props) => {
    return (
      <span className={`radio${className ? ` ${className}` : ""}`}>
        <input type="radio" id={id} checked={isSelected} {...restOf} />
        <label htmlFor={id}>{label}</label>
      </span>
    );
  }
);
