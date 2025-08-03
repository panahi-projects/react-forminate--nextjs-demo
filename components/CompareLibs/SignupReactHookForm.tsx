"use client";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { ReactNode } from "react";

// Define Zod schema
const signupSchema = z
  .object({
    firstName: z
      .string()
      .max(15, "Must be 15 characters or less")
      .nonempty("This field is required."),
    lastName: z
      .string()
      .max(20, "Must be 20 characters or less")
      .nonempty("This field is required."),
    email: z
      .string()
      .email("Invalid email address")
      .nonempty("This field is required."),
    password: z
      .string()
      .nonempty("Password is required")
      .min(8, "Password must be at least 8 characters")
      .regex(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/,
        "Password must contain at least one uppercase, one lowercase, one number and one special character"
      ),
    comparePassword: z.string().nonempty("Please confirm your password"),
  })
  .refine((data) => data.password === data.comparePassword, {
    message: "Passwords must match",
    path: ["comparePassword"],
  });

type SignupFormData = z.infer<typeof signupSchema>;

export default function SignupReactHookForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignupFormData>({
    resolver: zodResolver(signupSchema),
    mode: "onBlur",
  });

  const onSubmit = (data: SignupFormData) => {
    console.log("value", data);

    alert(JSON.stringify(data, null, 2));
  };

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
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="space-y-2.5">
        <div className="mb-[1.6rem] space-y-2">
          <RequiredLabel htmlFor="firstName">First Name</RequiredLabel>
          <input
            id="firstName"
            type="text"
            {...register("firstName")}
            placeholder="First Name"
            className="w-full rounded-md border border-neutral-800 bg-neutral-900 px-3 py-2 shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
          />
          {errors.firstName && (
            <div className="text-sm text-red-600">
              {errors.firstName.message}
            </div>
          )}
        </div>

        <div className="mb-[1.6rem] space-y-2">
          <RequiredLabel htmlFor="lastName">Last Name</RequiredLabel>
          <input
            id="lastName"
            type="text"
            {...register("lastName")}
            placeholder="Last Name"
            className="w-full rounded-md border border-neutral-800 bg-neutral-900 px-3 py-2 shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
          />
          {errors.lastName && (
            <div className="text-sm text-red-600">
              {errors.lastName.message}
            </div>
          )}
        </div>

        <div className="mb-[1.6rem] space-y-2">
          <RequiredLabel htmlFor="email">Email Address</RequiredLabel>
          <input
            id="email"
            type="email"
            {...register("email")}
            placeholder="Email"
            className="w-full rounded-md border border-neutral-800 bg-neutral-900 px-3 py-2 shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
          />
          {errors.email && (
            <div className="text-sm text-red-600">{errors.email.message}</div>
          )}
        </div>

        <div className="mb-[1.6rem] space-y-2">
          <RequiredLabel htmlFor="password">Password</RequiredLabel>
          <input
            id="password"
            type="password"
            {...register("password")}
            placeholder="Password"
            className="w-full rounded-md border border-neutral-800 bg-neutral-900 px-3 py-2 shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
          />
          {errors.password && (
            <div className="text-sm text-red-600">
              {errors.password.message}
            </div>
          )}
        </div>

        <div className="mb-[1.6rem] space-y-2">
          <RequiredLabel htmlFor="comparePassword">
            Confirm Password
          </RequiredLabel>
          <input
            id="comparePassword"
            type="password"
            {...register("comparePassword")}
            placeholder="Confirm Password"
            className="w-full rounded-md border border-neutral-800 bg-neutral-900 px-3 py-2 shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
          />
          {errors.comparePassword && (
            <div className="text-sm text-red-600">
              {errors.comparePassword.message}
            </div>
          )}
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
export const SignupReactHookFormCode = `import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { ReactNode } from "react";

// Define Zod schema
const signupSchema = z
  .object({
    firstName: z
      .string()
      .max(15, "Must be 15 characters or less")
      .nonempty("This field is required."),
    lastName: z
      .string()
      .max(20, "Must be 20 characters or less")
      .nonempty("This field is required."),
    email: z
      .string()
      .email("Invalid email address")
      .nonempty("This field is required."),
    password: z
      .string()
      .nonempty("Password is required")
      .min(8, "Password must be at least 8 characters")
      .regex(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/,
        "Password must contain at least one uppercase, one lowercase, one number and one special character"
      ),
    comparePassword: z.string().nonempty("Please confirm your password"),
  })
  .refine((data) => data.password === data.comparePassword, {
    message: "Passwords must match",
    path: ["comparePassword"],
  });

type SignupFormData = z.infer<typeof signupSchema>;

export default function SignupReactHookForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignupFormData>({
    resolver: zodResolver(signupSchema),
    mode: "onBlur",
  });

  const onSubmit = (data: SignupFormData) => {
    console.log("value", data);

    alert(JSON.stringify(data, null, 2));
  };

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
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="space-y-2.5">
        <div className="mb-[1.6rem] space-y-2">
          <RequiredLabel htmlFor="firstName">First Name</RequiredLabel>
          <input
            id="firstName"
            type="text"
            {...register("firstName")}
            placeholder="First Name"
            className="w-full rounded-md border border-neutral-800 bg-neutral-900 px-3 py-2 shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
          />
          {errors.firstName && (
            <div className="text-sm text-red-600">
              {errors.firstName.message}
            </div>
          )}
        </div>

        <div className="mb-[1.6rem] space-y-2">
          <RequiredLabel htmlFor="lastName">Last Name</RequiredLabel>
          <input
            id="lastName"
            type="text"
            {...register("lastName")}
            placeholder="Last Name"
            className="w-full rounded-md border border-neutral-800 bg-neutral-900 px-3 py-2 shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
          />
          {errors.lastName && (
            <div className="text-sm text-red-600">
              {errors.lastName.message}
            </div>
          )}
        </div>

        <div className="mb-[1.6rem] space-y-2">
          <RequiredLabel htmlFor="email">Email Address</RequiredLabel>
          <input
            id="email"
            type="email"
            {...register("email")}
            placeholder="Email"
            className="w-full rounded-md border border-neutral-800 bg-neutral-900 px-3 py-2 shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
          />
          {errors.email && (
            <div className="text-sm text-red-600">{errors.email.message}</div>
          )}
        </div>

        <div className="mb-[1.6rem] space-y-2">
          <RequiredLabel htmlFor="password">Password</RequiredLabel>
          <input
            id="password"
            type="password"
            {...register("password")}
            placeholder="Password"
            className="w-full rounded-md border border-neutral-800 bg-neutral-900 px-3 py-2 shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
          />
          {errors.password && (
            <div className="text-sm text-red-600">
              {errors.password.message}
            </div>
          )}
        </div>

        <div className="mb-[1.6rem] space-y-2">
          <RequiredLabel htmlFor="comparePassword">
            Confirm Password
          </RequiredLabel>
          <input
            id="comparePassword"
            type="password"
            {...register("comparePassword")}
            placeholder="Confirm Password"
            className="w-full rounded-md border border-neutral-800 bg-neutral-900 px-3 py-2 shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
          />
          {errors.comparePassword && (
            <div className="text-sm text-red-600">
              {errors.comparePassword.message}
            </div>
          )}
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
