const Header = () => {
  return (
    <div className="py-16">
      <h1 className="text-6xl font-semibold pb-12">
        Good Morning, <span className="text-teal-300">Andrew!</span>
      </h1>
      <div className="pl-4">
        <small className="text-slate-400">
          Here is your today&apos;s briefing:
        </small>
        <section className="block pt-4 space-y-2">
          <h1 className="text-xl">
            You have{" "}
            <span className="px-2 bg-slate-200 border border-gray-200 rounded-full text-slate-500">
              0 tasks
            </span>{" "}
            scheduled for <b>Today</b>
          </h1>
          <h1 className="text-xl">
            There have been{" "}
            <span className="px-2 bg-slate-200 border border-gray-200 rounded-full text-slate-500">
              4 new activities
            </span>{" "}
            since <q className="font-semibold">Yesterday</q>
          </h1>
        </section>
      </div>
    </div>
  );
};

export default Header;
