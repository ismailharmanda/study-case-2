import React from "react";
import ReactDOM from "react-dom";

import { cartActions, productActions } from "../../store";
import { useDispatch } from "react-redux";

import classes from "./Warning.module.css";
import classNames from "classnames";

const Backdrop = ({ hideModal }) => {
  return <div className={classes.modalBackdrop} onClick={hideModal}></div>;
};
const ModalOverlay = ({ hideModal, id }) => {
  const dispatch = useDispatch();
  return (
    <div
      className={classNames({
        [classes.modal]: true,
      })}
    >
      <div className={classes["modal-content"]}>
        <div
          className={classNames({
            "text-end": true,
            [classes["modal-button"]]: true,
          })}
        >
          <button onClick={hideModal} type="button" className="btn">
            X
          </button>
        </div>
        <p>
          Ürünü sepetinizden sildikten sonra favorilerinizde saklamak ister
          misiniz?
        </p>
        <div
          className={classNames({
            "row m-0 p-0": true,
            [classes["button-group"]]: true,
          })}
        >
          <button
            onClick={() => {
              dispatch(cartActions.delete({ id }));
              hideModal();
            }}
            className=" btn btn-outline-primary col-3"
          >
            Sil
          </button>
          <button
            onClick={() => {
              dispatch(cartActions.delete({ id }));
              dispatch(productActions.favorite({ id }));
              hideModal();
            }}
            className="btn btn-primary col-8 offset-1"
          >
            Sil ve Favorilere Ekle
          </button>
        </div>
      </div>
    </div>
  );
};
const portalElement = document.querySelector("#warning");
const WarningModal = ({ hideModal, id }) => {
  return (
    <>
      {ReactDOM.createPortal(<Backdrop hideModal={hideModal} />, portalElement)}
      {ReactDOM.createPortal(
        <ModalOverlay id={id} hideModal={hideModal} />,
        portalElement
      )}
    </>
  );
};

export default WarningModal;
