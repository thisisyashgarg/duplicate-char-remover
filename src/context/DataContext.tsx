import { ReactNode, createContext, useState } from "react";
import React from "react";

export type CharacterDataContextType = {
  originalString: string;
  setOriginalString: React.Dispatch<React.SetStateAction<string>>;
  arrayOfChar: string[];
  setArrayOfChar: React.Dispatch<React.SetStateAction<string[]>>;
};

// Context fro storing the original string and the array of characters
export const CharacterDataContext = createContext<CharacterDataContextType>({
  originalString: "",
  setOriginalString: () => {},
  arrayOfChar: [""],
  setArrayOfChar: () => {},
});

// Provider for the above context
const DataContextProvider = ({ children }: { children: ReactNode }) => {
  const [arrayOfChar, setArrayOfChar] = useState<string[]>([]);
  const [originalString, setOriginalString] = useState<string>("");
  return (
    <CharacterDataContext.Provider
      value={{
        arrayOfChar,
        setArrayOfChar,
        originalString,
        setOriginalString,
      }}
    >
      {children}
    </CharacterDataContext.Provider>
  );
};

export default DataContextProvider;
