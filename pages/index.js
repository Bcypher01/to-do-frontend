import FilterBtn from "../components/FilterBtn";

export default function Home() {
  return (
    <div className="border shadow-md p-4">
      <div className="flex">
        <h1 className="font-bold text-2xl mr-auto">ALL TASKS</h1>
        <FilterBtn />
      </div>
      <div className="my-5">
        <div class="flex justify-between mb-2">
          <span class="text-base font-medium dark:text-white">
            <h1 className="text-2xl">Title 1</h1>
          </span>
          <span class="text-sm font-medium text-blue-700 dark:text-white">
            30%
          </span>
        </div>
        <div class="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
          <div
            class="bg-blue-700 h-2 rounded-full"
            style={{ width: "30%" }}
          ></div>
        </div>
      </div>

      <div className="my-9">
        <div class="flex justify-between mb-2">
          <span class="text-base font-medium dark:text-white">
            <h1 className="text-2xl">Title 2</h1>
          </span>
          <span class="text-sm font-medium text-blue-700 dark:text-white">
            50%
          </span>
        </div>
        <div class="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
          <div
            class="bg-blue-700 h-2 rounded-full"
            style={{ width: "50%" }}
          ></div>
        </div>
      </div>
    </div>
  );
}
