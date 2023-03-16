import React from "react";

const Input = ({ id, label, value, onChange, type }) => {
  return (
    <>
      <div className="relative">
        <input
          id={id}
          type={type}
          value={value}
          onChange={onChange}
          className="
        block
        rounded-md
        border-2 border-gray-500
        px-6
        pt-6
        pb-3
        w-full
        text-md
      text-black
        appearance-none
        focus:outline-none
        focus:ring-0
        peer
        invalid:border-b-1
        "
          placeholder=" "
        />
        <label
          htmlFor={id}
          className="
        absolute 
        text-md
      text-black
        duration-150 
        transform 
        -translate-y-3 
        scale-75 
        top-4 
        z-10 
        origin-[0] 
        left-6
        peer-focus:text-sm
        peer-placeholder-shown:scale-75
        peer-placeholder-shown:translate-y-0 
        peer-focus:scale-75
        peer-focus:-translate-y-3"
        >
          {label}
        </label>
      </div>
    </>
  );
};
export default Input;
