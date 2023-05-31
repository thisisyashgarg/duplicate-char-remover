import { ReactNode, createContext, useState } from "react";
import React from "react";

type CharacterDataContextType = {
  originalString: string;
  setOriginalString: React.Dispatch<React.SetStateAction<string>>;
  arrayOfChar: string[];
  setArrayOfChar: React.Dispatch<React.SetStateAction<string[]>>;
};

export const CharacterDataContext = createContext<CharacterDataContextType>({
  originalString: "",
  setOriginalString: () => {},
  arrayOfChar: [""],
  setArrayOfChar: () => {},
});

const DataContextProvider = ({ children }: { children: ReactNode }) => {
  const [arrayOfChar, setArrayOfChar] = useState<string[]>([]);
  const [originalString, setOriginalString] = useState<string>("");
  //   const [modifiedString, setModifiedString] = useState("");
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
