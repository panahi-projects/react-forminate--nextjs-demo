### Basic Structure

Here's a quick example of a basic form schema:

```ts
const formData = {
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
      validation: [
        {
          regex: "^\\S+@\\S+\\.\\S+$",
          message: "Invalid email format",
        },
      ],
    },
    {
      fieldId: "age",
      label: "Age",
      type: "number",
      attributes: {
        min: 0,
        max: 120,
      },
    },
  ],
};
```
