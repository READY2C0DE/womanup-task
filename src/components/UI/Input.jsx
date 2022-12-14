import React from 'react';

const Input = (props) => {
  return (
    <input
      type={props.type}
      value={props.value}
      onChange={(e) => props.setValue(e.target.value)}
      className={`input ${props.className}`}
      placeholder={props.placeholder}
    />
  );
};

export default Input;
