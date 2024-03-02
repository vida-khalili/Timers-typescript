import { type ComponentPropsWithoutRef, forwardRef } from "react";

type InputProps = {
  id: string;
  label: string;
} & ComponentPropsWithoutRef<"input">;
const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ id, label, ...props }, ref) => {
    return (
      <div>
        <label htmlFor={id}>{label}</label>
        <input id={id} {...props} ref={ref} name={id}></input>
      </div>
    );
  }
);

export default Input;
