export default function Image({ data, style, styleActions }) {
  const src = data?.value;
  return <img src={src} style={{ ...style }} {...styleActions}></img>;
}
