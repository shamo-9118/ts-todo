import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <div className=" w-96 mx-auto p-20">
      <h1 className="font-bold text-3xl">TODO LIST</h1>
      <div className="flex gap-x-2">
        <input className="border border-black" type="text" />
        <button className="border border-black flex-shrink-0 px-2">追加</button>
      </div>
      <ul className="mt-4 space-y-2">
        <label className="flex items-center">
          <li>
            <input type="checkbox" />
            <span>task1</span>
          </li>
        </label>
        <label className="flex items-center">
          <li>
            <input type="checkbox" />
            <span>task2</span>
          </li>
        </label>
        <label className="flex items-center">
          <li>
            <input type="checkbox" />
            <span>task3</span>
          </li>
        </label>
      </ul>
    </div>
  );
};

export default Home;
