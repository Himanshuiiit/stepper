import { createContext, useContext, useState } from "react";
import { workflow } from "../data/Workflow.json";

type ContextType = {
  tasks: {
    id: number;
    curruntState: any;
    name: string;
  }[];
  setTasks: (tasks: any) => void;
};

const Context = createContext<ContextType>({} as ContextType);

const ContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      curruntState: workflow[0],
      name: "Demo task",
    },
  ]);
  return (
    <Context.Provider value={{ tasks, setTasks }}>{children}</Context.Provider>
  );
};

export default ContextProvider;

export const useGlobalContext = () => {
  return useContext(Context);
};
