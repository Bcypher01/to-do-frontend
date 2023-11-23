import Link from "next/link";
import FilterBtn from "../components/FilterBtn";
import Tasks from "./Tasks";

const TaskList = ({ tasks }) => {
  return (
    <div className="border shadow-md p-4 min-h-full">
      <div className="flex">
        <h1 className="font-bold text-2xl mr-auto">ALL TASKS</h1>
        <FilterBtn />
      </div>
      {tasks.length ? (
        tasks.map((task) => (
          <div key={task.id}>
            <Tasks task={task} />
          </div>
        ))
      ) : (
        <div className="flex flex-col justify-center items-center">
          <h1 className="text-2xl pt-12 font-semibold text-center">
            No Task Available
          </h1>
          <Link href="/create-task">
            <button className="h-12 w-36 my-8 font-semibold rounded-sm border border-teal-300 hover:bg-teal-300 hover:text-white">
              Create new task
            </button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default TaskList;
