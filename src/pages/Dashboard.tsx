// import { useNavigate } from "react-router-dom";
// import { useGlobalContext } from "../utils/context";
import Flow from "../components/Flow/Flow";

const Dashboard = () => {
  // const navigate = useNavigate();
  // const { tasks } = useGlobalContext();
  return (
    <div className="p-8">
      <h1 className="text-3xl pb-4 font-bold">Dashboard</h1>
      {/* <div className="w-full border border-gray-400 text-white bg-gray-400 text-lg font-bold flex justify-between px-8 pr-14 py-4">
        <div>Name</div>
        <div>Status</div>
      </div>
      {tasks.map((task) => {
        return (
          <div key={task.id} className="w-full border border-gray-400">
            <div className="flex justify-between px-8 py-4">
              <div>{task.name}</div>
              <div
                onClick={() => navigate(`/task/${task.id}`)}
                className="text-white px-4 py-2 cursor-pointer font-semibold"
                style={{ backgroundColor: task.curruntState.color }}
              >
                {task.curruntState.name}
              </div>
            </div>
          </div>
        );
      })} */}
      <Flow />
    </div>
  );
};

export default Dashboard;
