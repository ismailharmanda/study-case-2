import React from "react";

import classes from "./Success.module.css";

const SuccessModal = () => {
  return (
    <div className={classes["success-modal"]}>
      Ürün başarılı bir şekilde sepete eklendi
    </div>
  );
};

export default SuccessModal;
