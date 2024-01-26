import { useEffect, useState } from "react";
import TaskList from "../components/TaskList";
import { server } from "../config";
import axios from "axios";
import Cookies from "js-cookie";

function Home() {
  const [currentPage, setCurrentPage] = useState(1);
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    const token = Cookies.get("token");
    const headers = {
      Authorization: `Bearer ${token}`,
    };
    axios
      .get(`https://todo-api-m08h.onrender.com/tasks/?page=${currentPage}`, {
        headers,
      })
      .then((response) => {
        let res = response.data;
        setLoading(false);
        setTasks(res);
      })
      .catch(() => {
        // The request was made and the server responded with a status code
        // that falls out of the range of 2xx
        setLoading(false);
        setErrorMessage(
          "Something went wrong, it's our fault.Please refresh the page"
        );
      });
  }, [currentPage]);

  return (
    <TaskList
      tasks={tasks}
      setTasks={setTasks}
      loading={loading}
      error={errorMessage}
      currentPage={currentPage}
      setCurrentPage={setCurrentPage}
    />
  );
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
