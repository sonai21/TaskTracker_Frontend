import React from "react";
import "./editTaskStatus.css";
import { ImCancelCircle } from "react-icons/im";

export default function EditTaskStatus({
  isUpdating,
  handleCancel,
  handleChange,
}) {
  if (!isUpdating) {
    return null;
  }
  return (
    <div className="modal">
      <div className="modal-content">
        <ImCancelCircle className="cancelIcon" onClick={handleCancel} />
        <option onClick={handleChange} className="statusbtn" value="active">
          Active
        </option>

        <hr />
        <option onClick={handleChange} className="statusbtn" value="pending">
          Pending
        </option>

        <hr />
        <option onClick={handleChange} className="statusbtn" value="complete">
          Complete
        </option>

        {/* <select
              className="statusbtn"
              value={newStatus}
              onChange={handleChange}
            >
              <option value="active">Active</option>
              <option value="pending">Pending</option>
              <option value="complete">Complete</option>
            </select> */}
      </div>
    </div>
  );
}
