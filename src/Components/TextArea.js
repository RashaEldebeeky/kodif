import { useState } from "react";

export default function TextArea({ data, style, styleActions }) {
  const [value, setValue] = useState(data?.value ?? "");

  const placeholder = data?.placeholder;
  return (
    <>
      <textarea
        placeholder={placeholder}
        style={{ ...style }}
        {...styleActions}
        value={value}
        onChange={(e) => setValue(e.target.value)}
      ></textarea>
    </>
  );
}
