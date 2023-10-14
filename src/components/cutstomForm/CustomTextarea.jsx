import React from "react";
import "./customForm.css";
import { useField } from "formik";

export default function CustomTextarea({ label, ...props }) {
  const [field, meta] = useField(props);

  return (
    <div>
      {/* <label>{label}</label> */}
      <textarea
        {...field}
        {...props}
        className={meta.touched && meta.error ? "textareaError" : ""}
        rows={5}
      />
      {meta.touched && meta.error && <div className="error">{meta.error}</div>}
    </div>
  );
}
