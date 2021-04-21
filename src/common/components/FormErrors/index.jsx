import { ErrorMessage } from "@hookform/error-message";
import React from "react";

const FormErrors = ({ errors }) => {
  return (
    <div className="error">
      {Object.keys(errors).length !== 0 && (
        <ErrorMessage errors={errors} name={Object.keys(errors)[0]} />
      )}
    </div>
  );
};

export default FormErrors;
