import React from "react";
import "./customForm.css";
import { useField } from "formik";

export default function CustomSelect({ label, ...props }) {
  const [field, meta] = useField(props);

  return (
    <div>
      <label>{label}</label>
      <select
        {...field}
        {...props}
        className={meta.touched && meta.error ? "selectError" : ""}
      />
      {meta.touched && meta.error && <div className="error">{meta.error}</div>}
    </div>
  );
}
