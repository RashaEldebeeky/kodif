import { useState } from "react";

export default function TextArea({ data, style, styleActions }) {
  const [value, setValue] = useState(data?.value ?? "");

  return (
    <>
      <textarea
        {...data}
        style={{ ...style }}
        {...styleActions}
        value={value}
        onChange={(e) => setValue(e.target.value)}
      ></textarea>
    </>
  );
}
