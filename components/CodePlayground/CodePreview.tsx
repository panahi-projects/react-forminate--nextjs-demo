// components/CodePreview.tsx
"use client";

import { useEffect, useState } from "react";
import { Highlight, themes } from "prism-react-renderer";
import CopyButton from "./CopyButton";
import ConsoleViewer from "#/ui/console-viewer";

interface CodePreviewProps {
  code: string;
  component: React.ReactNode;
  title?: string;
  maxHeight?: string;
}

export function CodePreview({
  code,
  component,
  title,
  maxHeight = "32rem",
}: CodePreviewProps) {
  const [activeTab, setActiveTab] = useState<"code" | "preview">("preview");
  const [isClient, setIsClient] = useState(false);
  const [wrapCode, setWrapCode] = useState(true); // Wrap by default

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <div className="my-2 overflow-hidden rounded-lg border border-neutral-900">
      {title && (
        <div className="border-b border-neutral-800 bg-neutral-950 px-4 py-2">
          <h3 className="font-mono text-sm text-gray-400">{title}</h3>
        </div>
      )}

      <div className="flex border-b border-neutral-800">
        <button
          className={`px-4 py-2 text-sm font-medium ${
            activeTab === "preview"
              ? "text-vercel-cyan bg-neutral-800"
              : "bg-neutral-950 hover:text-white"
          }`}
          onClick={() => setActiveTab("preview")}
        >
          Preview
        </button>
        <button
          className={`px-4 py-2 text-sm font-medium ${
            activeTab === "code"
              ? "text-vercel-cyan bg-neutral-800"
              : "bg-neutral-950 hover:text-white"
          }`}
          onClick={() => setActiveTab("code")}
        >
          Code
        </button>
      </div>

      <div className="relative">
        {activeTab === "preview" ? (
          <div>
            <div className="bg-neutral-950 p-4">
              {isClient ? component : <div>Loading preview...</div>}
            </div>
            <ConsoleViewer />
          </div>
        ) : (
          <div className="relative">
            <div className="flex items-center justify-between border-b border-neutral-700 bg-neutral-800 px-4 py-1">
              <div className="text-xs text-gray-400">TSX</div>
              <button
                onClick={() => setWrapCode(!wrapCode)}
                className="flex items-center gap-1 text-xs text-gray-400 hover:text-white"
              >
                {wrapCode ? (
                  <>
                    <span>Unwrap</span>
                    <svg
                      width="12"
                      height="12"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                    >
                      <path
                        d="M4 12h16m-7-7l7 7-7 7"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </>
                ) : (
                  <>
                    <span>Wrap</span>
                    <svg
                      width="12"
                      height="12"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                    >
                      <path
                        d="M4 12h16m-7-7l7 7-7 7"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </>
                )}
              </button>
            </div>

            <div
              className="overflow-y-auto bg-neutral-950"
              style={{ maxHeight }}
            >
              <Highlight code={code} language="tsx" theme={themes.vsDark}>
                {({
                  className,
                  style,
                  tokens,
                  getLineProps,
                  getTokenProps,
                }) => (
                  <pre
                    className={`${className} bg-neutral-950 p-4 text-sm ${wrapCode ? "whitespace-pre-wrap" : "whitespace-pre"}`}
                    style={{ ...style }}
                  >
                    {tokens.map((line, i) => (
                      <div key={i} {...getLineProps({ line })}>
                        <span className="inline-block w-8 text-gray-500 select-none">
                          {i + 1}
                        </span>
                        {line.map((token, key) => (
                          <span key={key} {...getTokenProps({ token })} />
                        ))}
                      </div>
                    ))}
                  </pre>
                )}
              </Highlight>
            </div>
            <CopyButton content={code} />
          </div>
        )}
      </div>
    </div>
  );
}
