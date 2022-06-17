import type { NextPage } from "next";
import { useState } from "react";

const Home: NextPage = () => {
  const [text, setText] = useState();
  const [tasks, setTasks] = useState([]);

  const input = (e) => {
    setText(e.target.value);
  };
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
  const add = () => {
    setTasks((prevTasks) => {
      return [...prevTasks, { key: Math.random(), label: text, isDone: false }];
    });
    setText("");
  };
  return (
    <div className=" w-96 mx-auto p-20">
      <h1 className="font-bold text-3xl">TODO LIST</h1>
      <div className="flex gap-x-2">
        <input
          className="border border-black"
          type="text"
          onChange={input}
          value={text}
        />
        <button
          className="border border-black flex-shrink-0 px-2"
          onClick={add}
        >
          追加
        </button>
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
