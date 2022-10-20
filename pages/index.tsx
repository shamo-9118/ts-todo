import type { NextPage } from "next";
import { FC } from "react";
import { ChangeEventHandler, MouseEventHandler, useState, VFC } from "react";

type Task = {
  key: number;
  label: string;
  isDone: boolean;
};

const Home: NextPage = () => {
  //関数に型をつけるのはgenericsが有効
  const [text, setText] = useState(""); //初期値を入れてやることで型推論が有効になって定義しなくても型をつけてくれる。
  const [tasks, setTasks] = useState<Task[]>([]);
  //eに対して型をつけていく。しかしe: {target:{value:string}}という型の付け方はbad caseで本来この型は知っているから書けるもので型は抽象的にして選択肢を持たせるべき。
  //メソッドなどに型をつける時は、コードジャンプしてそこで使わている型を使うのが良い
  const input: ChangeEventHandler<HTMLInputElement> = (e) => {
    setText(e.target.value);
  };
  const toggle: ChangeEventHandler<HTMLInputElement> = (e) => {
    setTasks((prevTasks) => {
      return prevTasks.map((task) => {
        if (task.key === Number(e.target.value)) {
          return { ...task, isDone: !task.isDone };
        }
        return task;
      });
    });
  };
  const add: MouseEventHandler<HTMLButtonElement> = () => {
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
          追加します
        </button>
      </div>
      <ul className="mt-4 space-y-2">
        {tasks.map((task) => (
          <li key={task.key}>
            <ListItem task={task} toggle={toggle} />
          </li>
        ))}
      </ul>
    </div>
  );
};

//VFCは非推奨になっている。FCを使う。
const ListItem: FC<{
  task: Task;
  toggle: ChangeEventHandler<HTMLInputElement>;
}> = ({ task, toggle }) => {
  return (
    <label className="flex items-center">
      <input
        type="checkbox"
        checked={task.isDone}
        value={task.key}
        onChange={toggle}
      />
      <span>{task.label}</span>
    </label>
  );
};

export default Home;
