import React from "react";
import "./header.css";
import { Link } from "react-router-dom";
import { MdAddCircle } from "react-icons/md";

export default function Header() {
  return (
    <div>
      <header>
        <h1 className="headerTitle">TaskTracker</h1>
        <div className="createbtn-container">
          <Link to="/create" className="link">
            <MdAddCircle className="addIcon" />
          </Link>

          <button className="createbtn">
            <Link to="/create" className="link">
              New Task
            </Link>
          </button>
        </div>
      </header>
    </div>
  );
}
