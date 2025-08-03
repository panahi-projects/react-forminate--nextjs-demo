import { LinkBadge } from "#/components";
import { CodePreview } from "#/components/CodePlayground";
import SignupFormik from "#/components/CompareLibs/SignupFormik";
import SignupReactForminate, {
  SignupReactForminateCode,
} from "#/components/CompareLibs/SignupReactForminate";
import SignupReactHookForm, {
  SignupReactHookFormCode,
} from "#/components/CompareLibs/SignupReactHookForm";

export default function CompareLibsPage() {
  return (
    <div>
      <h1 className="text-vercel-violet text-3xl font-semibold">
        Compare React-Forminate vs React-Hook-Form vs Formik
      </h1>
      <section className="my-6">
        <h2 className="text-vercel-pink text-2xl font-semibold">
          React-Forminate
        </h2>
        <CodePreview
          code={SignupReactForminateCode}
          component={<SignupReactForminate />}
          title="React-Forminate Signup Form"
          focusedTitle="(90 lines)"
        />
        <LinkBadge href="https://github.com/panahi-projects/react-forminate--nextjs-demo/blob/main/components/CompareLibs/SignupReactForminate.tsx" />
      </section>
      <div className="my-6 w-full border-b-[1px] border-gray-800"></div>
      <section className="my-6">
        <h2 className="text-vercel-pink text-2xl font-semibold">
          React-Hook-Form
        </h2>
        <CodePreview
          code={SignupReactHookFormCode}
          component={<SignupReactHookForm />}
          title="React-Hook-Form Signup Form"
          focusedTitle="(162 lines)"
        />
        <LinkBadge href="https://github.com/panahi-projects/react-forminate--nextjs-demo/blob/main/components/CompareLibs/SignupReactHookForm.tsx" />
      </section>
      <div className="my-6 w-full border-b-[1px] border-gray-800"></div>
      <section className="my-6">
        <h2 className="text-vercel-pink text-2xl font-semibold">Formik</h2>
        <CodePreview
          code={SignupReactHookFormCode}
          component={<SignupFormik />}
          title="Formik Signup Form"
          focusedTitle="(162 lines)"
        />
        <LinkBadge href="https://github.com/panahi-projects/react-forminate--nextjs-demo/blob/main/components/CompareLibs/SignupFormik.tsx" />
      </section>
    </div>
  );
}
