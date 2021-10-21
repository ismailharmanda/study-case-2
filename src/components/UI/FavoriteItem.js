import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { productActions, cartActions } from "../../store";

import unFavoritedIcon from "../../assets/interactions/unfavorited.svg";
import favoritedIcon from "../../assets/interactions/favorited.svg";

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

const FavoriteItem = ({ id, price }) => {
  const dispatch = useDispatch();
  const productState = useSelector((state) => state.products);
  const currentProduct = productState.find((product) => product.id === id);
  const isFavorite = currentProduct.isFavorite;

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
          className="btn bg-white  col-1"
        >
          <img src={favoritedIcon} alt="Favorite" />
        </button>
      );
      break;
    case false:
      favoriteButton = (
        <button
          onClick={() => dispatch(productActions.favoriteToggle({ id }))}
          className="btn bg-white col-1"
        >
          <img src={unFavoritedIcon} alt="Favorite" />
        </button>
      );
      break;

    default:
      favoriteButton = (
        <button
          onClick={() => dispatch(productActions.favoriteToggle({ id }))}
          className="btn bg-white col-1"
        >
          <img src={unFavoritedIcon} alt="Favorite" />
        </button>
      );
      break;
  }
  return (
    <div className="col-12 row m-0 p-0 align-items-center">
      <div className="col-12 col-sm-2 p-0 text-center text-sm-start">
        <img style={{ width: "100%" }} alt="Product" src={imageUrl} />
      </div>
      <div className="col-0 col-sm-1"></div>
      <div className="col-12 col-sm-9 m-0 p-0">
        <h5>{currentProduct.name}</h5>
        <div className="cart-item__content-code">W1CE95z8 - 998</div>
        <div className="favorite-item__price">{price}</div>
        <button
          onClick={() => {
            dispatch(cartActions.add({ id, price, amount: 1 }));
          }}
          className="btn btn-primary col-10 col-sm-2"
        >
          Sepete Ekle
        </button>
        {favoriteButton}
      </div>
      <hr className="cart-item__divider" />
    </div>
  );
};

export default FavoriteItem;
