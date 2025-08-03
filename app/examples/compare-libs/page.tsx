import { CodePreview } from "#/components/CodePlayground";
import SignupReactForminate, {
  SignupReactForminateCode,
} from "#/components/CompareLibs/SignupReactForminate";
import SignupReactHookForm from "#/components/CompareLibs/SignupReactHookForm";

export default function CompareLibsPage() {
  return (
    <div>
      <h1>Compare Libs</h1>
      <CodePreview
        code={SignupReactForminateCode}
        component={<SignupReactForminate />}
        title="React-Forminate Signup Form"
      />
      <CodePreview
        code={SignupReactForminateCode}
        component={<SignupReactHookForm />}
        title="React-Hook-Form Signup Form"
      />
    </div>
  );
}
