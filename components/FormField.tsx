import React from "react";

type Props = {
  type?: string;
  title: string;
  placeholder: string;
  state: string;
  isTextArea?: boolean;
  setState: (value: string) => void;
};

const FormField = ({
  type,
  title,
  setState,
  placeholder,
  isTextArea,
  state,
}: Props) => {
  return (
    <div className="flexStart flex-col w-full gap-4">
      <label className="w-full text-gray-100">{title}</label>
      {isTextArea ? (
        <textarea
          placeholder={placeholder}
          value={state}
          required
          className="form_field-input"
          onChange={(e) => setState(e.target.value)}
        />
      ) : (
        <input
          type={type || "text"}
          placeholder={placeholder}
          value={state}
          required
          className="form_field-input"
          onChange={(e) => setState(e.target.value)}
        />
      )}
    </div>
  );
};

export default FormField;
