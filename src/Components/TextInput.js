import { useState } from "react";

export default function TextInput({ data, style, styleActions }) {
  const [value, setValue] = useState(data?.value ?? "");
  return (
    <>
      <input
        type="text"
        style={{ ...style }}
        {...styleActions}
        value={value}
        {...data}
        onChange={(e) => setValue(e.target.value)}
      ></input>
    </>
  );
}
