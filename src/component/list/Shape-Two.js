import React, { Fragment } from "react";
import "./shape.css";

function ShapeTwo({ item }) {
  console.log(item);
  return (
    <Fragment>
      <div className=" item ShapeTwo">
        <ul>
          <li>{item.name}</li>
          <li>{item.email}</li>
          <li>{item.age}</li>
        </ul>
      </div>
    </Fragment>
  );
}

export default ShapeTwo;
