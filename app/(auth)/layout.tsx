import Logo from "@/components/Logo";
import React, { ReactNode } from "react";

type LayoutProps = {
  children: ReactNode;
};

function Layout({ children }: LayoutProps) {
  return (
    <div className="flex flex-col min-h-screen">
      <nav className="flex items-center justify-start border-b border-border h-16 px-4 py-2">
        <Logo isSignIn />
      </nav>
      <main className="flex w-full flex-grow items-center justify-center">
        {children}
      </main>
    </div>
  );
}

export default Layout;
