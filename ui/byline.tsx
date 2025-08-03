import { Logo } from "#/components";
import { VercelLogo } from "#/ui/vercel-logo";

export default function Byline() {
  return (
    <div className="bg-vc-border-gradient rounded-lg p-px shadow-lg shadow-black/20">
      <div className="flex flex-col justify-between space-y-2 rounded-lg bg-black p-3.5 lg:px-5 lg:py-3">
        <div className="flex items-center gap-x-1.5">
          <div className="text-sm text-gray-400">By</div>
          <a
            href="https://react-forminate.netlify.app/"
            title="React-Forminate"
          >
            <div className="flex gap-1 text-gray-100 hover:text-gray-50">
              <Logo />
              <div>React-Forminate</div>
            </div>
          </a>
        </div>

        <div className="text-sm text-gray-400">
          View code on the
          <a
            className="ml-1 underline decoration-dotted underline-offset-4 transition-colors hover:text-gray-300"
            href="https://github.com/panahi-projects/react-forminate"
            target="_blank"
            rel="noreferrer"
          >
            Github
          </a>
        </div>
      </div>
    </div>
  );
}
