"use client";
import { useFormik } from "formik";
import { ReactNode } from "react";
import * as Yup from "yup";

export default function SignupFormik() {
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      comparePassword: "",
    },
    validationSchema: Yup.object({
      firstName: Yup.string()
        .max(15, "Must be 15 characters or less")
        .required("This field is required."),
      lastName: Yup.string()
        .max(20, "Must be 20 characters or less")
        .required("This field is required."),
      email: Yup.string()
        .email("Invalid email address")
        .required("This field is required."),
      password: Yup.string()
        .required("Password is required")
        .min(8, "Password must be at least 8 characters")
        .matches(
          /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/,
          "Password must contain at least one uppercase, one lowercase, one number and one special character"
        ),
      comparePassword: Yup.string()
        .required("Please confirm your password")
        .oneOf([Yup.ref("password")], "Passwords must match"),
    }),
    onSubmit: (values) => {
      console.log("value", values);

      alert(JSON.stringify(values, null, 2));
    },
  });

  // Helper component for required field labels
  const RequiredLabel = ({
    htmlFor,
    children,
  }: {
    htmlFor: string;
    children: ReactNode;
  }) => (
    <label
      htmlFor={htmlFor}
      className="mb-2 block text-sm font-medium text-gray-500"
    >
      {children} <span className="text-red-500">*</span>
    </label>
  );

  return (
    <form onSubmit={formik.handleSubmit}>
      <div className="space-y-2.5">
        <div className="mb-[1.6rem] space-y-2">
          <RequiredLabel htmlFor="firstName">First Name</RequiredLabel>
          <input
            id="firstName"
            name="firstName"
            type="text"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.firstName}
            placeholder="First Name"
            className="w-full rounded-md border border-neutral-800 bg-neutral-900 px-3 py-2 shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
          />
          {formik.touched.firstName && formik.errors.firstName ? (
            <div className="text-sm text-red-600">
              {formik.errors.firstName}
            </div>
          ) : null}
        </div>

        <div className="mb-[1.6rem] space-y-2">
          <RequiredLabel htmlFor="lastName">Last Name</RequiredLabel>
          <input
            id="lastName"
            name="lastName"
            type="text"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.lastName}
            placeholder="Last Name"
            className="w-full rounded-md border border-neutral-800 bg-neutral-900 px-3 py-2 shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
          />
          {formik.touched.lastName && formik.errors.lastName ? (
            <div className="text-sm text-red-600">{formik.errors.lastName}</div>
          ) : null}
        </div>

        <div className="mb-[1.6rem] space-y-2">
          <RequiredLabel htmlFor="email">Email Address</RequiredLabel>
          <input
            id="email"
            name="email"
            type="email"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
            placeholder="Email"
            className="w-full rounded-md border border-neutral-800 bg-neutral-900 px-3 py-2 shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
          />
          {formik.touched.email && formik.errors.email ? (
            <div className="text-sm text-red-600">{formik.errors.email}</div>
          ) : null}
        </div>

        <div className="mb-[1.6rem] space-y-2">
          <RequiredLabel htmlFor="password">Password</RequiredLabel>
          <input
            id="password"
            name="password"
            type="password"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.password}
            placeholder="Password"
            className="w-full rounded-md border border-neutral-800 bg-neutral-900 px-3 py-2 shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
          />
          {formik.touched.password && formik.errors.password ? (
            <div className="text-sm text-red-600">{formik.errors.password}</div>
          ) : null}
        </div>

        <div className="mb-[1.6rem] space-y-2">
          <RequiredLabel htmlFor="comparePassword">
            Confirm Password
          </RequiredLabel>
          <input
            id="comparePassword"
            name="comparePassword"
            type="password"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.comparePassword}
            placeholder="Confirm Password"
            className="w-full rounded-md border border-neutral-800 bg-neutral-900 px-3 py-2 shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
          />
          {formik.touched.comparePassword && formik.errors.comparePassword ? (
            <div className="text-sm text-red-600">
              {formik.errors.comparePassword}
            </div>
          ) : null}
        </div>

        <button
          type="submit"
          className="cursor-pointer rounded-md bg-[#0457aa] px-4 py-2 text-white hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:outline-none"
        >
          Submit
        </button>
      </div>
    </form>
  );
}

//Code to be shown in the editor:
export const SignupFormikCode = `import { useFormik } from "formik";
import { ReactNode } from "react";
import * as Yup from "yup";

export default function SignupFormik() {
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      comparePassword: "",
    },
    validationSchema: Yup.object({
      firstName: Yup.string()
        .max(15, "Must be 15 characters or less")
        .required("This field is required."),
      lastName: Yup.string()
        .max(20, "Must be 20 characters or less")
        .required("This field is required."),
      email: Yup.string()
        .email("Invalid email address")
        .required("This field is required."),
      password: Yup.string()
        .required("Password is required")
        .min(8, "Password must be at least 8 characters")
        .matches(
          /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/,
          "Password must contain at least one uppercase, one lowercase, one number and one special character"
        ),
      comparePassword: Yup.string()
        .required("Please confirm your password")
        .oneOf([Yup.ref("password")], "Passwords must match"),
    }),
    onSubmit: (values) => {
      console.log("value", values);

      alert(JSON.stringify(values, null, 2));
    },
  });

  // Helper component for required field labels
  const RequiredLabel = ({
    htmlFor,
    children,
  }: {
    htmlFor: string;
    children: ReactNode;
  }) => (
    <label
      htmlFor={htmlFor}
      className="mb-2 block text-sm font-medium text-gray-500"
    >
      {children} <span className="text-red-500">*</span>
    </label>
  );

  return (
    <form onSubmit={formik.handleSubmit}>
      <div className="space-y-2.5">
        <div className="mb-[1.6rem] space-y-2">
          <RequiredLabel htmlFor="firstName">First Name</RequiredLabel>
          <input
            id="firstName"
            name="firstName"
            type="text"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.firstName}
            placeholder="First Name"
            className="w-full rounded-md border border-neutral-800 bg-neutral-900 px-3 py-2 shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
          />
          {formik.touched.firstName && formik.errors.firstName ? (
            <div className="text-sm text-red-600">
              {formik.errors.firstName}
            </div>
          ) : null}
        </div>

        <div className="mb-[1.6rem] space-y-2">
          <RequiredLabel htmlFor="lastName">Last Name</RequiredLabel>
          <input
            id="lastName"
            name="lastName"
            type="text"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.lastName}
            placeholder="Last Name"
            className="w-full rounded-md border border-neutral-800 bg-neutral-900 px-3 py-2 shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
          />
          {formik.touched.lastName && formik.errors.lastName ? (
            <div className="text-sm text-red-600">{formik.errors.lastName}</div>
          ) : null}
        </div>

        <div className="mb-[1.6rem] space-y-2">
          <RequiredLabel htmlFor="email">Email Address</RequiredLabel>
          <input
            id="email"
            name="email"
            type="email"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
            placeholder="Email"
            className="w-full rounded-md border border-neutral-800 bg-neutral-900 px-3 py-2 shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
          />
          {formik.touched.email && formik.errors.email ? (
            <div className="text-sm text-red-600">{formik.errors.email}</div>
          ) : null}
        </div>

        <div className="mb-[1.6rem] space-y-2">
          <RequiredLabel htmlFor="password">Password</RequiredLabel>
          <input
            id="password"
            name="password"
            type="password"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.password}
            placeholder="Password"
            className="w-full rounded-md border border-neutral-800 bg-neutral-900 px-3 py-2 shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
          />
          {formik.touched.password && formik.errors.password ? (
            <div className="text-sm text-red-600">{formik.errors.password}</div>
          ) : null}
        </div>

        <div className="mb-[1.6rem] space-y-2">
          <RequiredLabel htmlFor="comparePassword">
            Confirm Password
          </RequiredLabel>
          <input
            id="comparePassword"
            name="comparePassword"
            type="password"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.comparePassword}
            placeholder="Confirm Password"
            className="w-full rounded-md border border-neutral-800 bg-neutral-900 px-3 py-2 shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
          />
          {formik.touched.comparePassword && formik.errors.comparePassword ? (
            <div className="text-sm text-red-600">
              {formik.errors.comparePassword}
            </div>
          ) : null}
        </div>

        <button
          type="submit"
          className="cursor-pointer rounded-md bg-[#0457aa] px-4 py-2 text-white hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:outline-none"
        >
          Submit
        </button>
      </div>
    </form>
  );
}`;
