import React from "react";
import ReactDOM from "react-dom";

import classes from "./Success.module.css";
import classNames from "classnames";

const SuccessModal = () => {
  return (
    <div className={classes["success-modal"]}>
      Ürün başarıl bir şekilde sepete eklendi
    </div>
  );
};

export default SuccessModal;
