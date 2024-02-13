export default function DropDown({ data, style, styleActions }) {
  const name = data?.name;
  const options = data?.options;
  return (
    <select name={name} id={name} style={{ ...style }} {...styleActions}>
      {options.map((option, idx) => (
        <option key={idx} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
}
