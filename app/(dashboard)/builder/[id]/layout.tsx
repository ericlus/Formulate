import DesignerContextProvider from "@/components/context/DesignerContext";
import { ReactNode } from "react";

type LayoutProps = {
  children: ReactNode;
};

function Layout({ children }: LayoutProps) {
  return (
    <DesignerContextProvider>
      <div className="flex flex-grow">{children}</div>
    </DesignerContextProvider>
  );
}

export default Layout;
