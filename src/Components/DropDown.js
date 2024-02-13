import { useState } from "react";

export default function DropDown({ data, style, styleActions }) {
  const [value, setValue] = useState("");
  const name = data?.name;
  const options = data?.options;
  return (
    <select
      name={name}
      id={name}
      value={value}
      style={{ ...style }}
      {...styleActions}
      onChange={(e) => setValue(e.target.value)}
    >
      <option disabled value="">
        Select
      </option>
      {options.map((option, idx) => (
        <option key={idx} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
}
