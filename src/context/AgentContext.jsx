import { createContext, useContext, useState } from "react";

const AgentContext = createContext();

export function AgentProvider({ children }) {
  const [agentResult, setAgentResult] = useState(null);

  return (
    <AgentContext.Provider
      value={{
        agentResult,
        setAgentResult,
      }}
    >
      {children}
    </AgentContext.Provider>
  );
}

export function useAgent() {
  return useContext(AgentContext);
}