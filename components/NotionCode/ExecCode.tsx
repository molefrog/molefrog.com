"use client";

import { useState, useLayoutEffect } from "react";

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
  const [JSCode] = React.useState(() => js);

  useLayoutEffect(() => {
    initReactExternals();

    try {
      const init = new AsyncFunction("React", JSCode) as ModuleFn;

      init(React).then((returnedComp) => {
        setComponent(() => returnedComp);
      });
    } catch (err) {
      console.error("`ExecCode`: error executing external code: ", err);
    }
  }, [JSCode]);

  const isReady = typeof Component === "function";

  return (
    <figure className="exec-code exec-code--full">
      <div className="exec-code__content">
        {isReady && <Component />}
        {!isReady && <div className="exec-code__loading">We&apos;re getting it ready...</div>}
      </div>
    </figure>
  );
};
