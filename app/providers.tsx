// app/providers.tsx
"use client";

import React, { useEffect, useState } from "react";
import { NextUIProvider } from "@nextui-org/react";
import { ThemeProvider as NextThemesProvider } from "next-themes";

export function Providers({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<string | undefined>();

  useEffect(() => {
    const localTheme = window.localStorage.getItem("theme");
    setTheme(localTheme || "dark");
  }, []);

  if (!theme) {
    return null;
  }

  return (
    <NextUIProvider>
      <NextThemesProvider attribute="class" defaultTheme={theme}>
        {children}
      </NextThemesProvider>
    </NextUIProvider>
  );
}
