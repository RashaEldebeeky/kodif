import { useState } from "react";

import Button from "./Components/Button";
import Container from "./Components/Container";
import DropDown from "./Components/DropDown";
import Image from "./Components/Image";
import Text from "./Components/Text";
import TextArea from "./Components/TextArea";
import TextInput from "./Components/TextInput";

var React = require("react");

export default function ComponentFactory({ type, data, style, children }) {
  const componentType = {
    textfield: TextInput,
    container: Container,
    text: Text,
    image: Image,
    dropdown: DropDown,
    button: Button,
    textarea: TextArea,
  };
  const webStyle = style?.webStyle;
  const [styles, setStyles] = useState(webStyle);
  const styleActions = {
    onFocus: () => setStyles({ ...webStyle, ...style?.actions?.onFocus }),
    onMouseEnter: () => setStyles({ ...webStyle, ...style?.actions?.onHover }),
    onMouseLeave: () => setStyles({ ...webStyle }),
    onBlur: () => setStyles({ ...webStyle, ...style?.actions?.onBlur }),
  };
  return React.createElement(componentType[type], {
    children: children,
    data: data,
    style: styles,
    styleActions,
  });
}
