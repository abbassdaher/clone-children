import React from "react";
import { cloneElement } from "react";

function ButtonGroup({ children }) {
    console.log(children.props.children);
  const clonedElement = React.cloneElement(children, {
    color: 'red',
    customClass: 'group'
  });

  return <div>{clonedElement}</div>;
}

export default ButtonGroup;
