import Components from "../Components";

export default function Container({ children, style, styleActions }) {
  return (
    <>
      <div style={{ ...style }} {...styleActions}>
        <Components components={children}></Components>
      </div>
    </>
  );
}
