import FilterBtn from "../components/FilterBtn";

const createTask = () => {
  return (
    <div className="border p-4 shadow-md">
      <div className="flex">
        <h1 className="font-bold text-2xl mr-auto">CREATE TASK</h1>
        <FilterBtn />
      </div>
      <div className="my-5"></div>
    </div>
  );
};

export default createTask;
