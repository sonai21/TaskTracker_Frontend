import * as Yup from "yup";

export const taskSchema = Yup.object().shape({
  title: Yup.string()
    .min(2, "Too short!")
    .max(25, "Too long!")
    .required("*Required"),

  description: Yup.string().min(10).max(100),

  taskStatus: Yup.string()
    .oneOf(["pending", "active", "completed"], "Select current status of task")
    .required("Please select current status of the task"),
});
