export default function Image({ data, style, styleActions }) {
  return <img {...data} style={{ ...style }} {...styleActions}></img>;
}
