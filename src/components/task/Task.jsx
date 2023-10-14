import React, { useState } from "react";
import "./task.css";
import {
  MdDelete,
  MdPendingActions,
  MdOutlineIncompleteCircle,
  MdOutlineCheckCircle,
  MdOutlinePending,
} from "react-icons/md";
import { TbCircleDashed } from "react-icons/tb";
import { AiFillEdit, AiOutlineClockCircle } from "react-icons/ai";

import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { updateTask } from "../../redux/taskSlice";
import EditTaskStatus from "../editTaskStatus/EditTaskStatus";

export default function Task({ task }) {
  const [newStatus, setNewStatus] = useState(task.taskStatus);
  const [isUpdating, setIsupdating] = useState(false);
  const { taskInfo, pending, error } = useSelector((state) => state.task);
  const dispatch = useDispatch();

  const handleEdit = () => {
    setIsupdating(true);
  };

  const handleCancel = () => {
    setIsupdating(false);
  };

  const handleChange = async (e) => {
    const status = e.target.value;
    try {
      console.log("status value " + status);
      await dispatch(updateTask({ taskId: task._id, newStatus: status }));
      setIsupdating(false);
      setNewStatus(status);
    } catch (err) {
      console.log(err);
    }
  };

  const handleDelete = async () => {
    try {
      await axios.delete(`/delete/${task._id}`);
      window.location.reload();
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="task">
      <div className="taskHeader">
        <button className="edit" onClick={handleEdit}>
          <AiFillEdit /> Status
        </button>
      </div>

      <EditTaskStatus
        isUpdating={isUpdating}
        handleCancel={handleCancel}
        handleChange={handleChange}
      />

      <div className="taskInfo">
        <h1 className="taskTitle">{task.title}</h1>
        <p className="taskDesc">{task.description}</p>
      </div>

      <div className="taskFooter">
        {newStatus === "complete" && (
          <span className="taskStatus" style={{ color: "#16FF00" }}>
            <MdOutlineCheckCircle />
            {newStatus}
          </span>
        )}
        {newStatus === "pending" && (
          <span className="taskStatus" style={{ color: "red" }}>
            <AiOutlineClockCircle /> {newStatus}
          </span>
        )}
        {newStatus === "active" && (
          <span className="taskStatus" style={{ color: "#F2BE22" }}>
            <TbCircleDashed />
            {newStatus}
          </span>
        )}

        <button className="deleteTask" onClick={handleDelete}>
          <MdDelete className="icon" />
        </button>
      </div>
    </div>
  );
}
