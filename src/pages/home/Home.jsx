import React, { useEffect, useState } from "react";
import Header from "../../components/header/Header";
import Tasks from "../tasks/Tasks";
import "./home.css";
import axios from "axios";

export default function Home() {
  const [tasks, setTasks] = useState([]);
  useEffect(() => {
    const fetchTasks = async () => {
      const res = await axios.get("/tasks");
      setTasks(res.data);
      console.log(res);
    };
    fetchTasks();
  }, []);
  return (
    <div className="home">
      <Header />
      <Tasks tasks={tasks} />
    </div>
  );
}
