import { CodePreview } from "#/components/CodePlayground";
import SignupReactForminate, {
  SignupReactForminateCode,
} from "#/components/CompareLibs/SignupReactForminate";
import SignupReactHookForm, {
  SignupReactHookFormCode,
} from "#/components/CompareLibs/SignupReactHookForm";

export default function CompareLibsPage() {
  return (
    <div>
      <h1 className="text-vercel-cyan text-3xl font-semibold">
        Compare React-Forminate vs React-Hook-Form vs Formik
      </h1>
      <section className="my-6">
        <h2 className="text-vercel-violet text-2xl font-semibold">
          React-Forminate
        </h2>
        <CodePreview
          code={SignupReactForminateCode}
          component={<SignupReactForminate />}
          title="React-Forminate Signup Form"
        />
      </section>
      <section className="my-6">
        <h2 className="text-vercel-violet text-2xl font-semibold">
          React-Hook-Form
        </h2>
        <CodePreview
          code={SignupReactHookFormCode}
          component={<SignupReactHookForm />}
          title="React-Hook-Form Signup Form"
        />
      </section>
    </div>
  );
}
