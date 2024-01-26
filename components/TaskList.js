import Link from "next/link";
import { Fragment, useRef, useState } from "react";
import FilterBtn from "../components/FilterBtn";
import Tasks from "./Tasks";
import { Dialog, Transition } from "@headlessui/react";
import Cookies from "js-cookie";

const TaskList = ({
  tasks,
  loading,
  errorMessage,
  setCurrentPage,
  setTasks,
}) => {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState();
  const cancelButtonRef = useRef(null);

  const deleteTask = (id) => {
    const token = Cookies.get("token");
    setTasks((current) => current.filter((task) => task.id !== active));
    const requestOptions = {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    };
    fetch(
      `https://todo-api-m08h.onrender.com/tasks/${id}/`,
      requestOptions
    ).catch((error) => console.log(error));
  };

  return (
    <>
      <Transition.Root show={open} as={Fragment}>
        <Dialog
          as="div"
          className="fixed z-10 inset-0 overflow-y-auto"
          initialFocus={cancelButtonRef}
          onClose={setOpen}>
          <div
            className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block
         sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0">
              <Dialog.Overlay className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
            </Transition.Child>

            {/* This element is to trick the browser into centering the modal contents. */}
            <span
              className="hidden sm:inline-block sm:align-middle sm:h-screen"
              aria-hidden="true">
              &#8203;
            </span>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95">
              <div
                className="inline-block align-bottom bg-white rounded-lg
               text-left 
            overflow-hidden shadow-xl 
            transform transition-all 
            sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
                <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                  <div className="sm:flex sm:items-start">
                    <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                      <Dialog.Title
                        as="h3"
                        className="text-lg leading-6 font-medium text-gray-900">
                        Delete this task
                      </Dialog.Title>
                      <div className="mt-2">
                        <p className="text-sm text-gray-500">
                          Are you sure you want to delete this task? it will be
                          permanently removed. This action cannot be undone.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                  <button
                    type="button"
                    className="w-full inline-flex justify-center rounded-md
                   border border-transparent shadow-sm px-4 py-2 bg-red-600
                    text-base font-medium text-white hover:bg-red-700 
                    focus:outline-none focus:ring-2 focus:ring-offset-2
                     focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm"
                    onClick={() => {
                      setOpen(false);
                      deleteTask(active);
                    }}>
                    Delete
                  </button>
                  <button
                    type="button"
                    className="mt-3 w-full inline-flex justify-center
                  rounded-md border border-gray-300 shadow-sm px-4 py-2
                   bg-white text-base font-medium text-gray-700
                    hover:bg-gray-50 focus:outline-none focus:ring-2
                     focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0
                      sm:ml-3 sm:w-auto sm:text-sm"
                    onClick={() => setOpen(false)}
                    ref={cancelButtonRef}>
                    Cancel
                  </button>
                </div>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition.Root>
      <div className="border shadow-md min-h-full">
        <div className="p-4">
          <div className="flex">
            <h1 className="font-bold text-2xl mr-auto">ALL TASKS</h1>
            <FilterBtn />
          </div>
          {tasks.results?.length ? (
            tasks.results.map((task) => (
              <div key={task.id}>
                <Tasks task={task} setActive={setActive} setOpen={setOpen} />
              </div>
            ))
          ) : loading ? (
            <span>
              <h1 className="text-2xl font-medium text-center pt-12">
                Loading...
              </h1>
            </span>
          ) : errorMessage ? (
            <div className="flex flex-col justify-center items-center">
              <h1 className="text-2xl pt-12 font-semibold text-center">
                {errorMessage}
              </h1>
            </div>
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
        {tasks?.results && (
          <div className="flex border-t py-2 px-4 mt-[10%]">
            <span>
              <p>
                Showing <b>1</b> to <b>{tasks.page_size}</b> of{" "}
                <b>{tasks.total_pages}</b> results
              </p>
            </span>
            <span className="flex ml-auto space-x-2 md:space-x-4">
              <button
                className={`rounded px-4 border border-gray-200 ${
                  !tasks.previous && "bg-gray-300"
                } hover:bg-gray-200`}
                disabled={!tasks.previous}
                onClick={() => {
                  setCurrentPage((prevState) => prevState - 1);
                }}>
                Prev.
              </button>
              <button
                className={`rounded px-4 border border-gray-200 ${
                  !tasks.next && "bg-gray-300"
                } hover:bg-gray-200`}
                disabled={!tasks.next}
                onClick={() => {
                  setCurrentPage((prevState) => prevState + 1);
                }}>
                Next
              </button>
            </span>
          </div>
        )}
      </div>
    </>
  );
};

export default TaskList;
