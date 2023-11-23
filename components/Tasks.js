import React from "react";

const Tasks = ({ task }) => {
  return (
    <div className="my-5">
      <div className="flex justify-between mb-2">
        <span className="text-base font-medium dark:text-white">
          <h1 className="text-2xl">{task.name}</h1>
        </span>
        <span className="text-sm font-medium text-blue-700 dark:text-white">
          {task.percentage}%
        </span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
        <div
          className="bg-blue-700 h-2 rounded-full"
          style={{ width: `${task.progress}%` }}></div>
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
          {Date(task.created_on).slice(0, 15)}
        </small>
      </div>
    </div>
  );
};

export default Tasks;
