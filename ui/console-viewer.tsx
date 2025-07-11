"use client";
import React, { useEffect, useRef, useState } from "react";

type LogEntry = React.ReactNode;

const ConsoleViewer: React.FC = () => {
  const [logs, setLogs] = useState<LogEntry[]>([]);
  const scrollRef = useRef<HTMLDivElement>(null); // ⬅️ scroll container ref

  const style = {
    string: "text-yellow-400",
    number: "text-pink-400",
    booleanTrue: "text-blue-400",
    booleanFalse: "text-red-400",
    null: "text-gray-500 italic",
    undefined: "text-gray-500 italic",
    objectKey: "text-green-400",
    objectValue: "text-white",
  };

  const formatValue = (value: any): React.ReactNode => {
    if (typeof value === "string") {
      return <span className={style.string}>"{value}"</span>;
    }
    if (typeof value === "number") {
      return <span className={style.number}>{value}</span>;
    }
    if (typeof value === "boolean") {
      return (
        <span
          className={value === true ? style.booleanTrue : style.booleanFalse}
        >
          {String(value)}
        </span>
      );
    }
    if (value === null) {
      return <span className={style.null}>null</span>;
    }
    if (typeof value === "undefined") {
      return <span className={style.undefined}>undefined</span>;
    }
    if (Array.isArray(value)) {
      return (
        <span>
          [{" "}
          {value.map((item, i) => (
            <span key={i}>
              {formatValue(item)}
              {i < value.length - 1 && ", "}
            </span>
          ))}{" "}
          ]
        </span>
      );
    }
    if (typeof value === "object") {
      return (
        <span>
          {"{ "}
          {Object.entries(value).map(([key, val], index, arr) => (
            <span key={key} className="mb-4 inline-block">
              <span className={style.objectKey}>{key}</span>: {formatValue(val)}
              {index < arr.length - 1 && ", "}
            </span>
          ))}
          {" }"}
        </span>
      );
    }
    return <span>{String(value)}</span>;
  };

  useEffect(() => {
    const originalLog = console.log;

    console.log = (...args: any[]) => {
      const formatted = args.map((arg, index) => (
        <React.Fragment key={index}>{formatValue(arg)} </React.Fragment>
      ));
      setLogs((prev) => [...prev, <div key={prev.length}>{formatted}</div>]);
      originalLog(...args);
    };

    return () => {
      console.log = originalLog;
    };
  }, []);

  // ⬇️ Scroll to bottom on new logs
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [logs]);

  return (
    <div className="relative my-4">
      {/* Terminal Label */}
      <div className="absolute -top-2 left-4 bg-[#0d0d0d] px-2 text-xs font-bold tracking-wide text-gray-400">
        console.log
      </div>
      <div className="overflow-hidden rounded-md border border-gray-700 bg-[#0d0d0d] py-4 font-mono text-sm shadow-md">
        {/* Terminal Body */}
        <div
          ref={scrollRef}
          className="scrollbar-thin scrollbar-thumb-gray-600 scrollbar-track-transparent h-60 space-y-1 overflow-y-auto p-4 text-white"
        >
          {logs}
        </div>
      </div>
    </div>
  );
};

export default ConsoleViewer;
