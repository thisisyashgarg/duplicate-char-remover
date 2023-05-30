import { createContext } from "react";

type CharacterDataContextType = {
  originalString: string;
  setOriginalString: React.Dispatch<React.SetStateAction<string>>;
  arrayOfChar: string[];
  setArrayOfChar: React.Dispatch<React.SetStateAction<string[]>>;
};

let CharacterDataContext = createContext<CharacterDataContextType>({
  originalString: "",
  setOriginalString: () => {},
  arrayOfChar: [""],
  setArrayOfChar: () => {},
});

export default CharacterDataContext;
