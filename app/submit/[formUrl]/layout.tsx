import Logo from "@/components/Logo";
import ThemeSwitcher from "@/components/ThemeSwitcher";
import React, { ReactNode } from "react";

type LayoutProps = {
  children: ReactNode;
};

function Layout({ children }: LayoutProps) {
  return (
    <div className="flex flex-col min-h-screen">
      <nav className="flex items-center justify-between border-b border-border h-16 px-4 py-2">
        <Logo />
        <ThemeSwitcher />
      </nav>
      {children}
    </div>
  );
}

export default Layout;
