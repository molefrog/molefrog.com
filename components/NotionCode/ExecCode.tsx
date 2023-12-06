"use client";

import { useEffect, useState, lazy } from "react";

import * as React from "react";
import * as JSXRuntime from "react/jsx-runtime";
import * as ReactDOM from "react-dom";

const AsyncFunction = Object.getPrototypeOf(async function () {}).constructor;

type ComponentType = React.FC;
type ModuleFn = (react: typeof React) => Promise<ComponentType>;

declare global {
  interface Window {
    $__externals: {
      React: typeof React;
      JSXRuntime: typeof JSXRuntime;
      ReactDOM: typeof ReactDOM;
    };
  }
}

const initReactExternals = () => {
  if (typeof window.$__externals === "undefined") {
    window.$__externals = { React, JSXRuntime, ReactDOM };
  }
};

export const ExecCode = ({ js }: { js: string }) => {
  const [Component, setComponent] = useState<ComponentType | null>(null);

  useEffect(() => {
    initReactExternals();

    const init = new AsyncFunction("React", js) as ModuleFn;

    init(React).then((returnedComp) => {
      setComponent(() => returnedComp);
    });
  }, [js]);

  if (typeof Component === "function") {
    return (
      <div className="exec-code">
        <Component />
      </div>
    );
  }

  return <>Loading...</>;
};
