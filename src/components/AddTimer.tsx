import { useRef } from "react";
import Button from "./UI/Button/Button";
import Form, { type FormHandle } from "./UI/Form/Form";
import Input from "./UI/Input/Input";

const AddTimer = () => {
  const customForm = useRef<FormHandle>(null);
  const handleSave = (data: unknown) => {
    const extractedData = data as { name: string; duration: string };
    console.log(extractedData);
    customForm.current?.clear();
  };
  return (
    <div className="p-4">
      <Form onSave={handleSave} ref={customForm}>
        <Input id="name" label="name" type="name" />
        <Input id="duration" label="duration" type="number" />
        <Button className="btn btn-green w-100 mt-3">Save</Button>
      </Form>
    </div>
  );
};

export default AddTimer;
