import FilterBtn from "../components/FilterBtn";
import Tasks from "./Tasks";

const TaskList = ({ tasks }) => {
  return (
    <div className="border shadow-md p-4">
      <div className="flex">
        <h1 className="font-bold text-2xl mr-auto">ALL TASKS</h1>
        <FilterBtn />
      </div>
      {tasks?.map((task) => (
        <div key={task.id}>
          <Tasks task={task} />
        </div>
      ))}
    </div>
  );
};

export default TaskList;
