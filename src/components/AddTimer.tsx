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
    <Form onSave={handleSave} ref={customForm}>
      <Input id="name" label="name" type="name" />
      <Input id="duration" label="duration" type="number" />
      <Button>Save</Button>
    </Form>
  );
};

export default AddTimer;
