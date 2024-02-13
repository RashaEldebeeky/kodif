export default function Text({ data, style, styleActions }) {
  const text = data.value;
  return (
    <>
      <p style={{ ...style }} {...styleActions}>
        {text}
      </p>
    </>
  );
}
