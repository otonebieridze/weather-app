import { createContext, useContext } from "react";

export const myContext = createContext(undefined);

export const useMyContext = () => {
  const context = useContext(myContext);

  if (context === undefined) {
    throw new Error("useMyContext must be used within a MyContextProvider");
  }

  return context;
};
