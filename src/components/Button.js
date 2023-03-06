import React from "react";

const Button = ({ text, onClick, color }) => {
  return (
    <button
      onClick={onClick}
      className="btn"
      style={{ backgroundColor: color }}
    >
      {text}
    </button>
  );
};

export default Button;
