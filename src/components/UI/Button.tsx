"use client";
import React from "react";
import "./button.css";

const Button = ({ children, disabled, isLoading, ...props }: any) => {
  return (
    <button
      className="myButton"
      disabled={disabled || isLoading}
      style={{
        opacity: disabled || isLoading ? 0.6 : 1,
        cursor: disabled || isLoading ? "not-allowed" : "pointer",
      }}
      {...props}
    >
      {isLoading && <span className="button-spinner"></span>}
      {children}
    </button>
  );
};

export default Button;
