import React from "react";

const LayoutProvider = (props) => {
  return (
    <>
      <div>Header</div>
      <div>{props.children}</div>
      <div>Footer</div>
    </>
  );
};

export default LayoutProvider;
