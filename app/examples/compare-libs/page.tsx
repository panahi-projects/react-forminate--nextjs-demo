import { CodePreview } from "#/components/CodePlayground";
import SignupReactForminate, {
  SignupReactForminateCode,
} from "#/components/CompareLibs/SignupReactForminate";

export default function CompareLibsPage() {
  return (
    <div>
      <h1>Compare Libs</h1>
      <CodePreview
        code={SignupReactForminateCode}
        component={<SignupReactForminate />}
        title="React-Forminate Signup Form"
      />
    </div>
  );
}
