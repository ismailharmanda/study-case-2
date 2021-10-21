import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { productActions, cartActions } from "../../store";

import WarningModal from "./WarningModal";

import unFavoritedIcon from "../../assets/interactions/unfavorited.svg";
import favoritedIcon from "../../assets/interactions/favorited.svg";
import deleteIcon from "../../assets/interactions/delete.svg";

import img1 from "../../assets/products/hoodie-red.png";
import img2 from "../../assets/products/sweatshirt-black-zip.png";
import img3 from "../../assets/products/sweatshirt-gray-zip.png";
import img4 from "../../assets/products/sweatshirt-khaki.png";
import img5 from "../../assets/products/hoodie-black.png";
import img6 from "../../assets/products/hoodie-blue.png";
import img7 from "../../assets/products/sweatshirt-black.png";
import img8 from "../../assets/products/sweatshirt-black-zip-2.png";
import img9 from "../../assets/products/sweatshirt-black-ataturk.png";
import img10 from "../../assets/products/sweatshirt-white-ataturk.png";
const CartItem = ({ id, amount, price }) => {
  const dispatch = useDispatch();
  const productState = useSelector((state) => state.products);
  const currentProduct = productState.find((product) => product.id === id);
  const isFavorite = currentProduct.isFavorite;

  const [showModal, setShowModal] = useState(false);

  let imageUrl;
  switch (id) {
    case 1:
      imageUrl = img1;
      break;
    case 2:
      imageUrl = img2;
      break;
    case 3:
      imageUrl = img3;
      break;
    case 4:
      imageUrl = img4;
      break;
    case 5:
      imageUrl = img5;
      break;
    case 6:
      imageUrl = img6;
      break;
    case 7:
      imageUrl = img7;
      break;
    case 8:
      imageUrl = img8;
      break;
    case 9:
      imageUrl = img9;
      break;
    case 10:
      imageUrl = img10;
      break;

    default:
      imageUrl = img1;
      break;
  }
  let favoriteButton;
  switch (isFavorite) {
    case true:
      favoriteButton = (
        <button
          onClick={() => dispatch(productActions.favoriteToggle({ id }))}
          className="btn bg-white cart-favorite-container"
        >
          <img src={favoritedIcon} alt="Favorite" />
        </button>
      );
      break;
    case false:
      favoriteButton = (
        <button
          onClick={() => dispatch(productActions.favoriteToggle({ id }))}
          className="btn bg-white cart-favorite-container"
        >
          <img src={unFavoritedIcon} alt="Favorite" />
        </button>
      );
      break;

    default:
      favoriteButton = (
        <button
          onClick={() => dispatch(productActions.favoriteToggle({ id }))}
          className="btn bg-white cart-favorite-container"
        >
          <img src={unFavoritedIcon} alt="Favorite" />
        </button>
      );
      break;
  }

  const deleteButton = (
    <button
      onClick={() => setShowModal(true)}
      className="btn bg-white delete-container"
    >
      <img src={deleteIcon} alt="Delete" />
    </button>
  );

  const onDecreaseButtonClick = () => {
    if (amount > 1) {
      dispatch(cartActions.decrease({ id }));
    } else {
      setShowModal(true);
    }
  };
  const onIncreaseButtonClick = () => {
    dispatch(cartActions.add({ id, price, amount: 1 }));
  };
  return (
    <div className="cart-item col-12 row m-0 p-0">
      <div className="col-12 col-sm-2 p-0 text-center text-sm-start">
        <img className="cart-item__image" alt="Product" src={imageUrl} />
      </div>
      <div className="cart-item__content col-12 col-sm-8 m-0 p-0 ps-sm-5">
        <h5>{currentProduct.name}</h5>
        <div className="cart-item__content-code">W1CE95z8 - 998</div>
        <div
          className="cart-item__content-options"
          //   style={{ position: "absolute", bottom: 0 }}
        >
          <div>
            Beden: <span>M</span>
          </div>
          <div>
            Renk: <span>Gri melanj baskı</span>
          </div>
        </div>
      </div>
      <div className="cart-item__right col-12 col-sm-2 m-0 p-0 text-end">
        <div className="cart-item__price">{(price * amount).toFixed(2)}</div>
        {deleteButton}
        {favoriteButton}
        <div className="counter">
          <span onClick={onDecreaseButtonClick} className="counter__button">
            -
          </span>
          <span className="counter__total">{amount}</span>
          <span onClick={onIncreaseButtonClick} className="counter__button">
            +
          </span>
        </div>
      </div>
      <hr className="cart-item__divider" />
      {showModal ? (
        <WarningModal id={id} hideModal={() => setShowModal(false)} />
      ) : null}
    </div>
  );
};

export default CartItem;
