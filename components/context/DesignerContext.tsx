"use client";

import { createContext, ReactNode, useState } from "react";
import { FormElementInstance } from "../FormElements";

type DesignerContextType = {
  elements: FormElementInstance[];
  addElement: (index: number, element: FormElementInstance) => void;
};

export const DesignerContext = createContext<DesignerContextType | null>(null);

type DesignerContextProviderProps = {
  children: ReactNode;
};

export default function DesignerContextProvider({
  children,
}: DesignerContextProviderProps) {
  const [elements, setElements] = useState<FormElementInstance[]>([]);
  const addElement = (index: number, element: FormElementInstance) => {
    setElements((prev) => {
      const newElements = [...prev];
      newElements.splice(index, 0, element);
      return newElements;
    });
  };
  return (
    <DesignerContext.Provider
      value={{
        elements,
        addElement,
      }}
    >
      {children}
    </DesignerContext.Provider>
  );
}
