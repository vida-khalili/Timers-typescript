import { useRef } from "react";
import Button from "./UI/Button/Button";
import Form, { type FormHandle } from "./UI/Form/Form";
import Input from "./UI/Input/Input";
import { useTimerContext } from "../store/timers-context";

const AddTimer = () => {
  const customForm = useRef<FormHandle>(null);
  const { addTimer } = useTimerContext();
  const handleSave = (data: unknown) => {
    const extractedData = data as { name: string; duration: string };
    addTimer({ name: extractedData.name, duration: +extractedData.duration });
    customForm.current?.clear();
  };
  return (
    <div className="p-4  w-lg-50 w-100  bg-green-800 rounded p-3 mx-auto my-4 shadow">
      <Form onSave={handleSave} ref={customForm}>
        <Input id="name" label="name" type="name" />
        <Input id="duration" label="duration" type="number" />
        <Button className="btn btn-green w-100 mt-3 text-capitalize">
          add timer
        </Button>
      </Form>
    </div>
  );
};

export default AddTimer;
