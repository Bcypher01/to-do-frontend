import { useEffect, useState } from "react";

const Header = () => {
  const [user, setUser] = useState([]);
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    user && setUser(user);
  }, []);
  return (
    <div className="pt-16 pb-8">
      <h1 className="text-4xl lg:text-6xl font-semibold pb-6 lg:pb-12">
        Good Morning, <span className="text-teal-300">{user.username}!</span>
      </h1>
      <div className="pl-4">
        <small className="text-slate-400">
          Here is your today&apos;s briefing:
        </small>
        <section className="block pt-4 space-y-2">
          <h1 className="text-xl">
            You have{" "}
            <span className="px-2 bg-slate-200 border rounded-full text-slate-500">
              0 tasks
            </span>{" "}
            scheduled for <b className="font-semibold">Today</b>
          </h1>
          <h1 className="text-xl">
            There has been{" "}
            <span className="px-2 bg-blue-100 border rounded-full text-blue-500">
              4 new activities
            </span>{" "}
            since <b className="font-semibold">Yesterday</b>
          </h1>
        </section>
      </div>
    </div>
  );
};

export default Header;
