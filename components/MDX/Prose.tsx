import { ReactNode } from "react";

export function Pullquote({ children }: { children: ReactNode }) {
  return <p className="feel-pullquote">{children}</p>;
}

export function Aside({ label = "aside", children }: { label?: string; children: ReactNode }) {
  return (
    <aside className="feel-aside">
      <span className="feel-aside-label">{label}</span>
      {children}
    </aside>
  );
}
