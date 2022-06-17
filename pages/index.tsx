import type { NextPage } from "next";
import { toUnicode } from "punycode";
import { useState } from "react";

const Home: NextPage = () => {
  const [tasks, setTasks] = useState([
    { key: Math.random(), label: "task1", isDone: false },
    { key: Math.random(), label: "task2", isDone: false },
    { key: Math.random(), label: "task3", isDone: false },
  ]);

  const toggle = (e) => {
    setTasks((prevTasks) => {
      return prevTasks.map((task) => {
        if (task.key === Number(e.target.value)) {
          return { ...task, isDone: !task.isDone };
        }
        return task;
      });
    });
  };
  return (
    <div className=" w-96 mx-auto p-20">
      <h1 className="font-bold text-3xl">TODO LIST</h1>
      <div className="flex gap-x-2">
        <input className="border border-black" type="text" />
        <button className="border border-black flex-shrink-0 px-2">追加</button>
      </div>
      <ul className="mt-4 space-y-2">
        {tasks.map((task) => (
          <li key={task.key}>
            <label className="flex items-center">
              <input
                type="checkbox"
                checked={task.isDone}
                value={task.key}
                onChange={toggle}
              />
              <span>{task.label}</span>
            </label>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
