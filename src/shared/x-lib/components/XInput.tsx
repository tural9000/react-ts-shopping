import React from "react";

interface IPROPS {
  name?: string;
  value?: string;
  placeholder?: string;
  type?: string;
  className?: string;
  style?: React.CSSProperties;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
  onBlur?:  (e: React.FocusEvent<HTMLInputElement>) => void
  error?: boolean;
  errorMessage?: string;
}

interface IERROR {
    errorUserName?: string;
    city?: string;
    email?: string;
    phone?: string;
  }

const XInput:React.FC<IPROPS> = (props) => {
  const {name , placeholder , type , onBlur , onChange , error ,className, errorMessage} = props; 
  return (
    <div className="my-3">
      <input
        name={name}
        placeholder={placeholder}
        type={type || "text"}
        className={`form-control ${className}`}
        onBlur={onBlur}
        onChange={onChange}
      />
      {errorMessage && <div style={{ color: "red" }}>{errorMessage} </div>}
    </div>
  );
};

export default XInput;
