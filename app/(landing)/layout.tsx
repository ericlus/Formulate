import React, { ReactNode } from "react";

type LayoutProps = {
  children: ReactNode;
};

function Layout({ children }: LayoutProps) {
  return <div className="flex flex-col min-h-screen">{children}</div>;
}

export default Layout;
