import React, { useState } from "react";
import "./newTask.css";
import { Formik, Form } from "formik";
import CustomInput from "../../components/cutstomForm/CustomInput";
import CustomTextarea from "../../components/cutstomForm/CustomTextarea";
import CustomSelect from "../../components/cutstomForm/CustomSelect";
import axios from "axios";
import { taskSchema } from "../../schemas";

export default function NewTask() {
  const [error, setError] = useState("");

  const onSubmit = async (values, { setSubmitting, resetForm }) => {
    console.log(values);

    try {
      const res = await axios.post("/create", values);
      console.log(res.data);
      resetForm();
      res.data && window.location.replace("/");
    } catch (err) {
      console.log(err);
      setError(err.response.data.error);
    } finally {
      setSubmitting(false);
    }
  };
  return (
    <div className="taskPage">
      <div className="formArea">
        <Formik
          initialValues={{ title: "", description: "", taskStatus: "" }}
          validationSchema={taskSchema}
          onSubmit={onSubmit}
        >
          {({ isSubmitting }) => (
            <Form>
              <CustomInput
                label="Title"
                name="title"
                type="text"
                placeholder="Title"
                autoFocus={true}
              />
              {error && <div className="error">{error}</div>}
              <CustomTextarea
                label="Description"
                name="description"
                type="text"
                placeholder="Description of task..."
              />

              <CustomSelect
                label="Task Status"
                name="taskStatus"
                placeholder="Select current status of task"
              >
                <option value="">Select current status of task</option>
                <option value="pending">Pending</option>
                <option value="active">Active</option>
                <option value="completed">Completed</option>
              </CustomSelect>

              <button disabled={isSubmitting} className="add" type="submit">
                Add Task
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
}
