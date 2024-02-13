import ComponentFactory from "./ComponentFactory";

export default function Components({ components }) {
  return (
    <>
      {components?.map((component, index) => (
        <ComponentFactory key={index} {...component}></ComponentFactory>
      ))}
    </>
  );
}
