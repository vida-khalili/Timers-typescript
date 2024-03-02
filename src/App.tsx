import { useRef } from "react";
import Button from "./components/Button/Button";
import Input from "./components/Input/Input";
import Form, { type FormHandle } from "./components/Form/Form";

function App() {
  const customForm = useRef<FormHandle>(null);
  const handleSave = (data: unknown) => {
    const extractedData = data as { name: string; age: string };
    console.log(extractedData);
    customForm.current?.clear();
  };
  return (
    <>
      <Form onSave={handleSave} ref={customForm}>
        <Input id="name" label="name" type="name" />
        <Input id="age" label="age" type="number" />
        <Button>Save</Button>
      </Form>
    </>
  );
}

export default App;
