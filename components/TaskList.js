import Link from "next/link";
import FilterBtn from "../components/FilterBtn";
import Tasks from "./Tasks";

const TaskList = ({ tasks, loading, setCurrentPage }) => {
  return (
    <div className="border shadow-md min-h-full">
      <div className="p-4">
        <div className="flex">
          <h1 className="font-bold text-2xl mr-auto">ALL TASKS</h1>
          <FilterBtn />
        </div>
        {tasks.results?.length ? (
          tasks.results.map((task) => (
            <div key={task.id}>
              <Tasks task={task} />
            </div>
          ))
        ) : loading ? (
          <span>
            <h1 className="text-2xl font-medium text-center pt-12">
              Loading...
            </h1>
          </span>
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
      {/* pagination */}
      <div className="flex border-t py-2 px-4 mt-[10%]">
        <span>
          <p>
            Showing <b>1</b> to <b>{tasks.page_size}</b> of{" "}
            <b>{tasks.total_pages}</b> results
          </p>
        </span>
        <span className="ml-auto space-x-4">
          <button
            className="bg-white rounded px-4 border border-gray-200 hover:bg-gray-200"
            disabled={!tasks.previous}
            onClick={() => {
              setCurrentPage((prevState) => prevState - 1);
            }}>
            Prev
          </button>
          <button
            className="bg-white rounded px-4 border border-gray-200 hover:bg-gray-200"
            disabled={!tasks.next}
            onClick={() => {
              setCurrentPage((prevState) => prevState + 1);
            }}>
            Next
          </button>
        </span>
      </div>
    </div>
  );
};

export default TaskList;
