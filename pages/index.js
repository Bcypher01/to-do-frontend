import { useEffect, useState } from "react";
import TaskList from "../components/TaskList";
import { server } from "../config";
import axios from "axios";
import Cookies from "js-cookie";

function Home() {
  const [tasks, setTasks] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");
  useEffect(() => {
    const token = Cookies.get("token");
    const headers = {
      Authorization: `Bearer ${token}`,
    };
    axios
      .get("https://todo-api-m08h.onrender.com/tasks/", { headers })
      .then((response) => {
        let res = response.data;
        // setLoading(false);
        setTasks(res);
        console.log(res);
      })
      .catch(function (error) {
        if (error.response) {
          // The request was made and the server responded with a status code
          // that falls out of the range of 2xx
          let err = error.response.data;
          setErrorMessage(err.message);
        }
      });
  }, []);

  return <TaskList tasks={tasks} />;
}

// export const getTasks = () => {
//   try {
//     return fetch(`${server}/api/todo/`);
//   } catch (error) {
//     return {
//       notFound: true,
//     };
//   }
// };

// export const getStaticProps = async () => {
//   const res = await getTasks();
//   const tasks = await res.json();
//   return {
//     props: {
//       tasks,
//     },
//   };
// };
export default Home;
