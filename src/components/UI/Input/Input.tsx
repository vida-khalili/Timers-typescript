import { type ComponentPropsWithoutRef, forwardRef } from "react";

type InputProps = {
  id: string;
  label: string;
} & ComponentPropsWithoutRef<"input">;
const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ id, label, ...props }, ref) => {
    return (
      <div className="mb-3">
        <label htmlFor={id} className="form-label text-white text-capitalize">
          {label}
        </label>
        <input
          id={id}
          {...props}
          ref={ref}
          name={id}
          className="form-control"
        ></input>
      </div>
    );
  }
);

export default Input;
