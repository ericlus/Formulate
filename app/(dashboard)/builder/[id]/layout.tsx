import { ReactNode } from "react";

type LayoutProps = {
  children: ReactNode;
};

function Layout({ children }: LayoutProps) {
  return <div className="flex flex-grow">{children}</div>;
}

export default Layout;
