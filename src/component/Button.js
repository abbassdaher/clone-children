import React from "react";

function Button({ color, customClass, children }) {
  return (
    <button
      className={`${customClass ? ('button' + customClass) : 'button'}`}
      style={{ color: color }}
    >
      {children}
    </button>
  );
}

export default Button;
