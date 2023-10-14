import React from "react";
import "./tasks.css";
import Task from "../../components/task/Task";

export default function Tasks({ tasks }) {
  return (
    <div className="tasks">
      {tasks.map((t) => (
        <Task task={t} />
      ))}
    </div>
  );
}
