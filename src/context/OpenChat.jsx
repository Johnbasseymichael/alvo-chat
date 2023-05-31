import { createContext, useState } from "react";

export const OpenChatContext = createContext(); 

export const OpenChatContextProvider = ({ children }) => {
  const [isMsgOpen, setIsMsgOpen] = useState(false);

  return (
    <OpenChatContext.Provider value={{ isMsgOpen, setIsMsgOpen }}>
      {children}
    </OpenChatContext.Provider>
  );
};
