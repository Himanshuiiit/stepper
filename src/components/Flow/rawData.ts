import { MarkerType } from "reactflow";
import { workflow } from "../../data/Workflow.json";
const useRowData = () => {
  var init = 0;
  const colorsClassName: string[] = [
    "bg-[#FF9C6E]",
    "bg-[#FA541C]",
    "bg-[#AD2102]",
    "bg-[#40A9FF]",
    "bg-[#0078D6]",
    "bg-[#FA8C16]",
    "bg-[#73D13D]",
    "bg-[#389E0D]",
    "bg-[#FF4D4F]",
    "bg-[#8C8C8C]",
  ];
  const initialNodes = workflow.map((task) => {
    init += 100;
    return {
      id: task.code,
      data: { label: task.name },
      position: (() => {
        if (task.code === "planning") {
          return { x: 500, y: 0 };
        } else if (task.code === "planning_completed") {
          return { x: 500, y: 100 };
        } else if (task.code === "planning_approved") {
          return { x: 600, y: 200 };
        } else if (task.code === "issued") {
          return { x: 500, y: 300 };
        } else if (task.code === "live") {
          return { x: 500, y: 400 };
        } else if (
          ["surrendered", "due_for_revalidation"].includes(task.code)
        ) {
          return { x: task.code === "surrendered" ? 300 : 600, y: 500 };
        } else if (task.code === "expired") {
          return { x: 500, y: 600 };
        } else if (task.code === "cancelled") {
          return { x: 350, y: 600 };
        } else return { x: 250, y: 600 };
      })(),
      className: `bg-[${task.color}] text-white text-lg font-bold w-fit -translate-x-[50%]`,
    };
  });
  const initialEdges = workflow
    .map((task) => {
      return task.actions.map((action) => {
        return {
          id: task.code + "->" + action.next_state,
          source: task.code,
          target: action.next_state,
          label: action.name,
          markerEnd: {
            type: MarkerType.ArrowClosed,
          },
        };
      });
    })
    .flat();

  return {
    initialNodes,
    initialEdges,
    colorsClassName,
  };
};

export default useRowData;
