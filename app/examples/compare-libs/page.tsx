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
        <LinkBadge href="https://github.com/panahi-projects/react-forminate--nextjs-demo/blob/main/components/CompareLibs/SignupReactForminate.tsx" />
        <CodePreview
          code={SignupReactForminateCode}
          component={<SignupReactForminate />}
          title="React-Forminate Signup Form"
        />
      </section>
      <section className="my-6">
        <h2 className="text-vercel-pink text-2xl font-semibold">
          React-Hook-Form
        </h2>
        <LinkBadge href="https://github.com/panahi-projects/react-forminate--nextjs-demo/blob/main/components/CompareLibs/SignupReactHookForm.tsx" />
        <CodePreview
          code={SignupReactHookFormCode}
          component={<SignupReactHookForm />}
          title="React-Hook-Form Signup Form"
        />
      </section>
      <section className="my-6">
        <h2 className="text-vercel-pink text-2xl font-semibold">Formik</h2>
        <LinkBadge href="https://github.com/panahi-projects/react-forminate--nextjs-demo/blob/main/components/CompareLibs/SignupFormikForm.tsx" />
        <CodePreview
          code={SignupReactHookFormCode}
          component={<SignupFormik />}
          title="Formik Signup Form"
        />
      </section>
    </div>
  );
}
