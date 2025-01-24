"use client";

import { Tabs, TabsList, TabsTrigger } from "./ui/tabs";
import { MoonIcon, SunIcon } from "@radix-ui/react-icons";
import { useTheme } from "next-themes";
import { useState, useEffect } from "react";

function ThemeSwitcher() {
  const { theme, setTheme } = useTheme();
  const [isMounted, setIsMounted] = useState(false);

  console.log("THEME: ", theme);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <Tabs className="flex" defaultValue={theme}>
      <TabsList className="border">
        <TabsTrigger value="light" onClick={() => setTheme("light")}>
          <SunIcon className="h-5 w-5" />
        </TabsTrigger>
        <TabsTrigger value="dark" onClick={() => setTheme("dark")}>
          <MoonIcon className="h-5 w-5" />
        </TabsTrigger>
      </TabsList>
    </Tabs>
  );
}

export default ThemeSwitcher;
