import { useState } from "react";

export default function TextInput({ data, style, styleActions }) {
  const [value, setValue] = useState(data?.value ?? "");
  const placeholder = data?.placeholder;
  return (
    <>
      <input
        type="text"
        placeholder={placeholder}
        style={{ ...style }}
        {...styleActions}
        value={value}
        onChange={(e) => setValue(e.target.value)}
      ></input>
    </>
  );
}
