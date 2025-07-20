"use client";
import ConsoleViewer from "#/ui/console-viewer";
import { DynamicForm, FormDataCollectionType } from "react-forminate";

const formData: FormDataCollectionType = {
  formId: "userProfile",
  title: "User Profile",
  fields: [
    {
      fieldId: "name",
      label: "Name",
      type: "text",
      required: true,
      placeholder: "Enter your name",
    },
    {
      fieldId: "email",
      label: "Email",
      type: "text",
      required: true,
      placeholder: "Enter your email address",
      validation: [
        {
          pattern: "^\\S+@\\S+\\.\\S+$",
          // message: "Invalid email format",
        },
      ],
    },
    {
      fieldId: "age",
      label: "Age",
      type: "number",
      placeholder: "Enter your age",
    },
  ],
};

const Example1 = () => {
  const handleSubmit = (values: unknown, isValid: boolean) => {
    console.log("Is form valid: ", isValid);
    console.log("Form values: ", values);
  };
  return (
    <div>
      <DynamicForm formData={formData} onSubmit={handleSubmit} />
      <ConsoleViewer />
    </div>
  );
};

export default Example1;
