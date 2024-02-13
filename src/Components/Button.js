export default function Button({ data, style, styleActions }) {
  const title = data?.title;
  return (
    <button style={{ ...style }} {...styleActions}>
      {title}
    </button>
  );
}
