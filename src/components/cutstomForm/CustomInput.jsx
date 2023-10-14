import { useField } from "formik";
import "./customForm.css";
import React, { useState } from "react";

export default function CustomInput({ label, ...props }) {
  const [field, meta] = useField(props);

  return (
    <div>
      {/* <label>{label}</label> */}
      <input
        {...field}
        {...props}
        className={meta.touched && meta.error ? "inputError" : ""}
      />
      {meta.touched && meta.error && <div className="error">{meta.error}</div>}
    </div>
  );
}
