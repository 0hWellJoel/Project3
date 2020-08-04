import React, { Fragment } from "react";
import { MDBBtn } from "mdbreact";

const Buttons = () => {
  return (
    <Fragment>
      <MDBBtn gradient="peach">Peach</MDBBtn>
      <MDBBtn gradient="purple">Purple</MDBBtn>
      <MDBBtn gradient="blue">Blue</MDBBtn>
      <MDBBtn gradient="aqua">Aqua</MDBBtn>
    </Fragment>
  );
}

export default Buttons;