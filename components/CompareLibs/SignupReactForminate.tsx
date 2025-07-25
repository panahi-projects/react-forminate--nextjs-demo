"use client";
import {
  BaseField,
  DynamicForm,
  FormDataCollectionType,
} from "react-forminate";

export default function SignupReactForminate() {
  const commonStyling: Partial<BaseField> = {
    disableDefaultStyling: true,
    className:
      "w-full px-3 py-2 border border-neutral-800 rounded-md bg-neutral-900 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500",
    labelClassName: "block text-sm font-medium text-gray-500 mb-2",
    containerStyles: {
      marginBottom: "1.6rem",
    },
  };
  const formData: FormDataCollectionType = {
    formId: "signupForm",
    title: "Signup Form",
    fields: [
      {
        fieldId: "firstName",
        type: "text",
        label: "First Name",
        required: true,
        validation: [
          {
            maxLength: 15,
            message: "Must be 15 characters or less",
          },
        ],
        ...commonStyling,
      },
      {
        fieldId: "lastName",
        type: "text",
        label: "Last Name",
        required: true,
        validation: [
          {
            maxLength: 20,
            message: "Must be 20 characters or less",
          },
        ],
        ...commonStyling,
      },
      {
        fieldId: "email",
        type: "email",
        label: "Email Address",
        required: true,
        validation: [{ type: "email", message: "Invalid email address" }],
        ...commonStyling,
      },
      {
        fieldId: "password",
        type: "password",
        label: "Password",
        required: true,
        validation: [{ type: "password" }],
        ...commonStyling,
      },
      {
        fieldId: "confirmPassword",
        type: "password",
        label: "Confirm Password",
        required: true,
        validation: [
          {
            type: "equalTo",
            equalTo: "{{password}}", // Reference to the password field
            message: "Passwords must match", // Custom error message
          },
        ],
        ...commonStyling,
      },
    ],
  };

  const onSubmit = (value: any, isValid: boolean) => {
    console.log("value", value);

    if (isValid) {
      alert(JSON.stringify(value, null, 2));
    }
  };

  return <DynamicForm formData={formData} onSubmit={onSubmit} />;
}

export const SignupReactForminateCode = `import {
  BaseField,
  DynamicForm,
  FormDataCollectionType,
} from "react-forminate";

export default function SignupReactForminate() {
  const commonStyling: Partial<BaseField> = {
    disableDefaultStyling: true,
    className:
      "w-full px-3 py-2 border border-neutral-800 rounded-md bg-neutral-900 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500",
    labelClassName: "block text-sm font-medium text-gray-500 mb-2",
    containerStyles: {
      marginBottom: "1.6rem",
    },
  };
  const formData: FormDataCollectionType = {
    formId: "signupForm",
    title: "Signup Form",
    fields: [
      {
        fieldId: "firstName",
        type: "text",
        label: "First Name",
        required: true,
        validation: [
          {
            maxLength: 15,
            message: "Must be 15 characters or less",
          },
        ],
        ...commonStyling,
      },
      {
        fieldId: "lastName",
        type: "text",
        label: "Last Name",
        required: true,
        validation: [
          {
            maxLength: 20,
            message: "Must be 20 characters or less",
          },
        ],
        ...commonStyling,
      },
      {
        fieldId: "email",
        type: "email",
        label: "Email Address",
        required: true,
        validation: [{ type: "email", message: "Invalid email address" }],
        ...commonStyling,
      },
      {
        fieldId: "password",
        type: "password",
        label: "Password",
        required: true,
        validation: [{ type: "password" }],
        ...commonStyling,
      },
      {
        fieldId: "confirmPassword",
        type: "password",
        label: "Confirm Password",
        required: true,
        validation: [
          {
            type: "equalTo",
            equalTo: "{{password}}", // Reference to the password field
            message: "Passwords must match", // Custom error message
          },
        ],
        ...commonStyling,
      },
    ],
  };

  const onSubmit = (value: any, isValid: boolean) => {
    console.log("value", value);

    if (isValid) {
      alert(JSON.stringify(value, null, 2));
    }
  };

  return <DynamicForm formData={formData} onSubmit={onSubmit} />;
}
`;
