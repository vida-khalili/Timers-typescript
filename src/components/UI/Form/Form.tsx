import {
  useRef,
  type ComponentPropsWithoutRef,
  type FormEvent,
  forwardRef,
  useImperativeHandle,
} from "react";

type FormProps = ComponentPropsWithoutRef<"form"> & {
  onSave: (value: unknown) => void;
};
export type FormHandle = {
  clear: () => void;
};
const Form = forwardRef<FormHandle, FormProps>(
  ({ onSave, children, ...otherProps }, ref) => {
    const form = useRef<HTMLFormElement>(null);
    useImperativeHandle(ref, () => {
      return {
        clear() {
          console.log("Clearing");
          form.current?.reset();
        },
      };
    });
    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      const formData = new FormData(event.currentTarget);
      const data = Object.fromEntries(formData);
      onSave(data);
    };

    return (
      <form
        onSubmit={handleSubmit}
        {...otherProps}
        ref={form}
        className="w-25 mx-auto"
      >
        {children}
      </form>
    );
  }
);

export default Form;
