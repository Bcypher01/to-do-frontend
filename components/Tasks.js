import React from "react";

const Tasks = ({ task }) => {
  return (
    <div className="my-5">
      <div className="flex justify-between mb-2">
        <span className="flex space-x-4 text-base font-medium dark:text-white">
          <h1 className="text-2xl">{task.name}</h1>
        </span>
        <div className="space-x-3">
          <span className="text-sm font-medium text-blue-700 dark:text-white pt-2">
            {task.percentage}%
          </span>
          <button
            type="button"
            className="rounded bg-gray-300 p-1 hover:bg-gray-200">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="15"
              height="15"
              viewBox="0 0 32 32">
              <path d="M 23.90625 3.96875 C 22.859375 3.96875 21.8125 4.375 21 5.1875 L 5.1875 21 L 5.125 21.3125 L 4.03125 26.8125 L 3.71875 28.28125 L 5.1875 27.96875 L 10.6875 26.875 L 11 26.8125 L 26.8125 11 C 28.4375 9.375 28.4375 6.8125 26.8125 5.1875 C 26 4.375 24.953125 3.96875 23.90625 3.96875 Z M 23.90625 5.875 C 24.410156 5.875 24.917969 6.105469 25.40625 6.59375 C 26.378906 7.566406 26.378906 8.621094 25.40625 9.59375 L 24.6875 10.28125 L 21.71875 7.3125 L 22.40625 6.59375 C 22.894531 6.105469 23.402344 5.875 23.90625 5.875 Z M 20.3125 8.71875 L 23.28125 11.6875 L 11.1875 23.78125 C 10.53125 22.5 9.5 21.46875 8.21875 20.8125 Z M 6.9375 22.4375 C 8.136719 22.921875 9.078125 23.863281 9.5625 25.0625 L 6.28125 25.71875 Z"></path>
            </svg>
          </button>
        </div>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
        <div
          className="bg-blue-700 h-2 rounded-full"
          style={{ width: `${task.percentage}` }}></div>
      </div>
      <div className="flex space-x-2 my-2">
        <svg
          viewBox="0 0 64 64"
          xmlns="http://www.w3.org/2000/svg"
          strokeWidth="0.576"
          stroke="#808080"
          fill="none"
          className="w-6 h-6">
          <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
          <g id="SVGRepo_iconCarrier">
            <rect
              x="9.59"
              y="9.59"
              width="44.82"
              height="44.82"
              rx="2.5"></rect>
            <line x1="9.59" y1="20.59" x2="54.41" y2="20.59"></line>
            <line x1="19.7" y1="9.59" x2="19.7" y2="4.59"></line>
            <line x1="43.66" y1="9.59" x2="43.66" y2="4.59"></line>
            <rect x="16.14" y="27.92" width="6.15" height="6.15"></rect>
            <rect x="28.78" y="27.92" width="6.15" height="6.15"></rect>
            <rect x="41.26" y="27.92" width="6.15" height="6.15"></rect>
            <rect x="16.36" y="39.68" width="6.15" height="6.15"></rect>
            <rect x="29.01" y="39.68" width="6.15" height="6.15"></rect>
            <rect x="41.49" y="39.68" width="6.15" height="6.15"></rect>
          </g>
        </svg>
        <small className="text-gray-700 font-semibold">
          {new Date(task.created_on).toLocaleDateString("en-us", {
            weekday: "long",
            year: "numeric",
            month: "short",
            day: "numeric",
          })}
        </small>
      </div>
    </div>
  );
};

export default Tasks;
