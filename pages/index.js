import TaskList from "../components/TaskList";
import { server } from "../config";

export default function Home({ tasks }) {
  return <TaskList tasks={tasks} />;
}

export const getStaticProps = async () => {
  const res = await fetch(`${server}/api/todo/`);
  const tasks = await res.json();
  return {
    props: {
      tasks,
    },
  };
};
